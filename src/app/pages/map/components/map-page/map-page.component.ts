import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [],
  template: `<h2>Trouver une station</h2>
    <p>map-page works!</p> `,
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
export class MapPageComponent {}
