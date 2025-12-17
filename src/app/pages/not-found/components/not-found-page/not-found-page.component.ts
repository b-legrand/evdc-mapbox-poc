import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [],
  template: ` <p>not-found-page works!</p> `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex: 1 1 auto;
    }
  `,
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
