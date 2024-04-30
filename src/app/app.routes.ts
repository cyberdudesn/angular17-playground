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
    path: 'directive-composition-api',
    loadChildren: () =>
      import(
        './topics/directive-composition-api/directive-composition-api.module'
      ).then((m) => m.DirectiveCompositionApiModule),
  },
  {
    path: 'dependency-injection-in-depth',
    loadChildren: () =>
      import(
        './topics/dependency-injection-in-depth/dependency-injection-in-depth.module'
      ).then((m) => m.DependencyInjectionInDepthModule),
  },
  {
    path: 'ng-template-outlet',
    loadChildren: () =>
      import(
        './topics/trying-out-ng-template-outlet/trying-out-ng-template-outlet.module'
      ).then((m) => m.TryingOutNgTemplateOutletModule),
  },
  {
    path: 'reusable-reactive-form',
    loadChildren: () =>
      import(
        './topics/reusable-reactive-form/reusable-reactive-form.module'
      ).then((m) => m.ReusableReactiveFormModule),
  },
  {
    path: '',
    redirectTo: 'getting-started-signal',
    pathMatch: 'full',
  },
];
