import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell-page',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <header>
      <img
        src="assets/logo.png"
        height="64"
        width="64"
        role="presentation"
        alt=""
      />
      <h1>EV/DC</h1>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <router-outlet [name]="'floatingModal'"></router-outlet>
    <footer></footer>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      position: fixed;
      width: 100%;
      height: 64px;
      background-color: rgba(255, 255, 255, 0.8);
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
    }
    main {
      margin-top: 64px;
      flex: 1 1 auto;
      display: flex;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellPageComponent {}
