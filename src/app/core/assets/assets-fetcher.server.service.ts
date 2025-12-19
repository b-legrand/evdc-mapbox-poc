import { join } from 'path';

import { Injectable, TransferState, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { AssetsFetcher, makeAssetsKey } from './assets-fetcher.interface';
import { readFileSync } from 'fs';

/**
 * This service is used to fetch assets from the server.
 *
 * It uses the node.js filesystem api to fetch the assets
 * when in a lambda or local node.js
 *
 * DO NOT USE THIS SERVICE IN THE BROWSER (duh...)
 */
@Injectable()
export class AssetsFetcherServerService implements AssetsFetcher {
  private transferState = inject(TransferState);
  public fetchAssets<T>(relativePath: string): Observable<T> {
    const started = Date.now();
    const key = makeAssetsKey<T>(relativePath);

    const root = process.env['LAMBDA_TASK_ROOT'] ?? process.cwd();
    console.log(`[SSR] File request for ${relativePath} started`);

    return new Observable<T>((observer) => {
      let file;
      try {
        file = readFileSync(
          join(root, 'dist', 'evdc-mapbox-tests', 'browser', relativePath)
        );
      } catch (error) {
        console.log(`[SSR] File request for ${relativePath} failed`);
        observer.error(error);
        return;
      }
      observer.next(JSON.parse(file.toString()) as T);
      observer.complete();
    })
      /*
      return from(
        readFile(
          join(root, 'dist', 'evdc-mapbox-tests', 'browser', relativePath),
          'utf-8'
        ).then((data) => JSON.parse(data) as T)
      )*/
      .pipe(
        map((data) => {
          console.log(
            `[SSR] File request for ${relativePath} finished in ${Date.now() - started
            }ms`
          );
          this.transferState.set(key, data);
          console.log(
            `[SSR] File ${relativePath} added to transfer state in ${key}`
          );
          console.log('content size', data);
          return data;
        })
      );
  }
}
