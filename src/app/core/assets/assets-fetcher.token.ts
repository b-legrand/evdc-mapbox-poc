import { InjectionToken } from "@angular/core";

import { AssetsFetcher } from "./assets-fetcher.interface";

export const ASSETS = new InjectionToken<AssetsFetcher>("AssetsFetcher");
