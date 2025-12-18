import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanMatchFn, Route, UrlSegment } from '@angular/router';
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
  it('should return true when lang is supported', () => {
    const result = executeGuard({} as Route, [{ path: "en" }] as UrlSegment[]);

    expect(result).toBe(true);
  });
  it('should return false when lang is not recognized', () => {
    const result = executeGuard({} as Route, [{ path: "jp-JA" }] as UrlSegment[]);

    expect(result).toBe(false);
  });
});
