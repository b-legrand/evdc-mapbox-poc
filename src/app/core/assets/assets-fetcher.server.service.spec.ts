import { TestBed } from '@angular/core/testing';

import { AssetsFetcherServerService } from './assets-fetcher.server.service';

describe('AssetsFetcherServerService', () => {
  let service: AssetsFetcherServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetsFetcherServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
