import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-station-page',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>station-page works!</p> `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1 1 auto;
    }
  `,
  host: { class: 'page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StationPageComponent {}
