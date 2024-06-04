import { TestBed } from '@angular/core/testing';

import { AssetsFetcherBrowserService } from './assets-fetcher.browser.service';

describe('AssetsFetcherBrowserService', () => {
  let service: AssetsFetcherBrowserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsFetcherBrowserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
