import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TryingOutNgTemplateOutletComponent } from './trying-out-ng-template-outlet.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { WidgetAction } from './components/weather-widget/services/widget-action.service';
import { WidgetState } from './components/weather-widget/services/widget-state.service';
import { CustomWidgetActionComponent } from './components/custom-widget-actions/custom-widget-actions.component';

const routes: Routes = [
  {
    path: '',
    component: TryingOutNgTemplateOutletComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    WeatherWidgetComponent,
    CustomWidgetActionComponent,
  ],
  declarations: [TryingOutNgTemplateOutletComponent],
  providers: [WidgetAction, WidgetState],
})
export class TryingOutNgTemplateOutletModule {}
