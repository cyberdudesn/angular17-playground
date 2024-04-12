import { Injectable, signal } from '@angular/core';
import { Logger } from '../model/logger.model';

@Injectable()
export class LoggerService implements Logger {
  prefix = '[Logger]';
  logRows = signal<string[]>([]);

  log(str: string) {
    this.logRows.update((row) => row.concat(`${this.prefix}: ${str}`));
    console.log(this.logRows());
  }

  clear() {
    this.logRows.set([]);
  }
}
