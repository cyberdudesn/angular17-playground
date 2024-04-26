import { Routes } from '@angular/router';

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
    path: 'ng-template-outlet',
    loadChildren: () =>
      import(
        './topics/trying-out-ng-template-outlet/trying-out-ng-template-outlet.module'
      ).then((m) => m.TryingOutNgTemplateOutletModule),
  },
  {
    path: '',
    redirectTo: 'getting-started-signal',
    pathMatch: 'full',
  },
];
