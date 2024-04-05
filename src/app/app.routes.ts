import { Routes } from '@angular/router';
import { GettingStartedSignalComponent } from './topics/getting-started-signal/getting-started-signal.component';

export const routes: Routes = [
  {
    path: 'getting-started-signal',
    // loadChildren: () =>
    //   import(
    //     './topics/getting-started-signal/getting-started-signal.module'
    //   ).then((m) => m.GettingStartedSignalModule),
    component: GettingStartedSignalComponent,
  },
  {
    path: 'deferrable-views',
    loadChildren: () =>
      import(
        './topics/getting-started-signal/getting-started-signal.module'
      ).then((m) => m.GettingStartedSignalModule),
  },
  {
    path: '',
    redirectTo: 'getting-started-signal',
    pathMatch: 'full',
  },
];
