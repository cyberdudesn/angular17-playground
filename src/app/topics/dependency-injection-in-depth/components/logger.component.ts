import { Component, inject } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-logger',
  standalone: true,
  template: `
    @for(row of logRows(); track row) {
    <div>{{ row }}</div>
    }
    <button (click)="clear()">Clear</button>
  `,
  styles: `:host {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid rgba(0, 0, 0, 0.8);
    background: rgba(0, 0, 0, 0.4);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px;
    position: relative;
  }
  button {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  `,
})
export class LoggerComponent {
  private loggerService = inject(LoggerService);
  logRows = this.loggerService.logRows;

  clear() {
    console.log(this.loggerService.prefix);
    this.loggerService.clear();
  }
}
