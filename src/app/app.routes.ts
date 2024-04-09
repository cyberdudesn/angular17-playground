import { Routes } from '@angular/router';
import { GettingStartedSignalComponent } from './topics/getting-started-signal/getting-started-signal.component';
import { DirectiveCompositionApiComponent } from './topics/directive-composition-api/directive-composition-api.component';

export const routes: Routes = [
  {
    path: 'getting-started-signal',
    loadChildren: () =>
      import(
        './topics/getting-started-signal/getting-started-signal.module'
      ).then((m) => m.GettingStartedSignalModule),
  },
  {
    path: 'deferrable-views',
    loadChildren: () =>
      import(
        './topics/getting-started-signal/getting-started-signal.module'
      ).then((m) => m.GettingStartedSignalModule),
  },
  {
    path: 'directive-composition-api',
    loadChildren: () =>
      import(
        './topics/directive-composition-api/directive-composition-api.module'
      ).then((m) => m.DirectiveCompositionApiModule),
  },
  {
    path: '',
    redirectTo: 'getting-started-signal',
    pathMatch: 'full',
  },
];
