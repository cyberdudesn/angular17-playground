import { InjectionToken } from '@angular/core';

export interface DepInjTopicConfig {
  enableExperimental: boolean;
}

export const DEP_INJ_TOPIC_CONFIG = new InjectionToken<DepInjTopicConfig>(
  'topic.config',
  {
    providedIn: 'root',
    factory: () => ({
      enableExperimental: true,
    }),
  }
);
