import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { AssetsFetcherServerService } from './assets-fetcher.server.service';

describe('AssetsFetcherServerService', () => {
  let service: AssetsFetcherServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AssetsFetcherServerService] });
    service = TestBed.inject(AssetsFetcherServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
