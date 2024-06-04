import { HttpClient } from "@angular/common/http";
import { Injectable, TransferState, inject } from "@angular/core";
import { Observable, of, tap } from "rxjs";

import { AssetsFetcher, makeAssetsKey } from "./assets-fetcher.interface";
/**
 * This service is used to fetch assets from the browser.
 *
 * It uses the http client and the same state key as the server version.
 *
 */
@Injectable()
export class AssetsFetcherBrowserService implements AssetsFetcher {
	private httpClient = inject(HttpClient);
	private transferState = inject(TransferState);
	fetchAssets<T>(relativePath: string): Observable<T> {
		const started = Date.now();
		console.log(`[BROWSER] File request for ${relativePath} started`);
		const key = makeAssetsKey<T>(relativePath);
		if (this.transferState.hasKey(key)) {
      console.log(`[BROWSER] Key ${key} found in transfer state`);
			return of(this.transferState.get(key, null)) as Observable<T>;
		}
		return this.httpClient
			.get<T>(`/${relativePath}`)
			.pipe(
				tap(() => {
					console.log(
						`[BROWSER] File request for ${relativePath} finished in ${Date.now() - started}ms`,
					);
				}),
			);
	}
}
