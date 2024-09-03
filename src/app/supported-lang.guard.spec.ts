import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';
import { describe, it, expect, beforeEach } from 'vitest';

import { supportedLangGuard } from './supported-lang.guard';

describe('supportedLangGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => supportedLangGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
