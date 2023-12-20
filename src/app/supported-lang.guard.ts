import { CanMatchFn } from '@angular/router';

export const supportedLangGuard: CanMatchFn = (_route, segments) => {
  const lang = segments[0].path;
  return ['fr', 'en'].includes(lang);
};
