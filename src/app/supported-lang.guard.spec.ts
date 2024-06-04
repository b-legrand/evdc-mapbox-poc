import { TestBed } from '@angular/core/testing';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { supportedLangGuard } from './supported-lang.guard';
import { TranslocoService } from '@jsverse/transloco';

describe('supportedLangGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => supportedLangGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslocoService,
          useValue: { setActiveLang: vi.fn() } as Partial<TranslocoService>,
        },
      ],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
  it('should return true when lang is supported', () => {
    const result = executeGuard({} as Route, [{ path: 'en' }] as UrlSegment[]);

    expect(result).toBe(true);
  });
  it('should return false when lang is not recognized', () => {
    const result = executeGuard(
      {} as Route,
      [{ path: 'jp-JA' }] as UrlSegment[],
    );

    expect(result).toBe(false);
  });
});
