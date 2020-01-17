import { Component, Input } from '@angular/core';

@Component({
  selector: 'logger-lib-monitor',
  template: `
    <h1>
      Log Monitor (dummy)
    </h1>
    <p>{{stats}}</p>
  `,
  styles: []
})
export class LogMonitorComponent {
  @Input() stats: number;
}
