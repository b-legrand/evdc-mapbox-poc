import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [TranslocoDirective],
  template: `<ng-container *transloco="let t">
    <h2>{{ t('home.welcome') }}</h2>
    <p>home-page works!</p>
  </ng-container> `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      flex: 1 1 auto;
    }
  `,
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
