import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { supportedLangGuard } from './supported-lang.guard';

describe('supportedLangGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => supportedLangGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
