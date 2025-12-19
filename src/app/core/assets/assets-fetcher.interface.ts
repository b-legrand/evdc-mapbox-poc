import { makeStateKey } from "@angular/core";
import { Observable } from "rxjs";

/** Interface for fetching assets, implemented by server and browser versions */
export interface AssetsFetcher {
	/**
	 * Fetches assets from the given relative path
	 *
	 * Files should be available locally in src/assets, do not use this to make http requests
	 *
	 */
	fetchAssets<T>(relativePath: string): Observable<T>;
}

/** Create a transfer state key for assets */
export function makeAssetsKey<T>(relativePath: string) {
	return makeStateKey<T>(`assets:${relativePath}`);
}
