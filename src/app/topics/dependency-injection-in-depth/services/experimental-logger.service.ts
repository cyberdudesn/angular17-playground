import { Injectable, signal } from '@angular/core';
import { Logger } from '../model/logger.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExperimentalLoggerService implements Logger {
  prefix = '[Experimental]';
  logRows = signal<string[]>([]);

  constructor(http: HttpClient) {}

  log(str: string) {
    this.logRows.update((row) => row.concat(`${this.prefix}: ${str}`));
    console.log(this.logRows());
  }

  clear() {
    this.logRows.set([]);
  }
}
