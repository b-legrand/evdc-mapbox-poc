import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

export const supportedLangGuard: CanMatchFn = (_route, segments) => {
  const lang = segments[0].path;
  const supportedLand = ['fr', 'en', 'de', 'it', 'es', 'nl'].includes(lang);
  if (!supportedLand) {
    return false;
  }
  const transloco = inject(TranslocoService);
  transloco.setActiveLang(lang);
  return true;
};
