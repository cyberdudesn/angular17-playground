import { Component, Injector, inject } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { ExperimentalLoggerService } from './services/experimental-logger.service';
import { LegacyLogger } from './legacy-logger';
import { DEP_INJ_TOPIC_CONFIG, DepInjTopicConfig } from './config.token';
import { HttpClient } from '@angular/common/http';

function loggerFactory(
  injector: Injector
): ExperimentalLoggerService | LoggerService {
  return injector.get(DEP_INJ_TOPIC_CONFIG).enableExperimental
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
}

@Component({
  selector: 'app-getting-started-signal',
  template: `<h2>Dependency injection in-depth</h2>
    <app-logger></app-logger>
    <form (submit)="$event.preventDefault()">
      <input #logInput />
      <button (click)="log(logInput.value); logInput.value = ''">Log</button>
    </form> `,
  providers: [
    // **Creates a new instance of ExperimentalLoggerService and replaces the instance of LoggerService**
    // {
    //   provide: LoggerService,
    //   useClass: ExperimentalLoggerService,
    // },
    // ** Uses an existing instance of ExperimentalLoggerService from parent (throws error if doesn't exist in parent) **
    // {
    //   provide: LoggerService,
    //   useExisting: ExperimentalLoggerService,
    // },
    // ** LegacyLogger obj would be used instead of an instance of LoggerService
    // {
    //   provide: LoggerService,
    //   useValue: LegacyLogger,
    // },
    // ** if 'enableExperimental' flag is true in DEP_INJ_TOPIC_CONFIG injection token then ExperimentalLoggerService
    // ** would be used, otherwise LoggerService would be used
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [Injector],
    },
  ],
})
export class DependencyInjectionInDepthComponent {
  private logger = inject(LoggerService);

  private config = inject(DEP_INJ_TOPIC_CONFIG);

  constructor() {
    // this.logger.prefix = '[Parent Component]';
    console.log('config', this.config);
  }

  log(inputValue: string) {
    this.logger.log(inputValue);
  }
}
