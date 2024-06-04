import { Injectable, inject } from "@angular/core";

import { ASSETS } from "./assets-fetcher.token";

@Injectable({
	providedIn: "root",
})
export class AssetsFacadeService {
	private assetsFetcher = inject(ASSETS);

	get<T>(relativePath: string) {
		return this.assetsFetcher.fetchAssets<T>(relativePath);
	}
}
