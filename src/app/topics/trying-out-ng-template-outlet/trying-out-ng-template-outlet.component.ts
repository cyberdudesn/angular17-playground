import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-trying-out-ng-template-outlet',
  template: `<h2>Trying Out NgTemplateOutlet</h2>
    <div class="nto-wrapper">
      <div>
        <h3>Default Widget</h3>
        <app-weather-widget></app-weather-widget>
      </div>
      <div>
        <h3>Custom Widget</h3>
        <app-weather-widget
          [headerTemplate]="altWidgetHeader"
          [contentTemplate]="altWidgetContent"
          [actionsTemplate]="altWidgetActions"
        ></app-weather-widget>
      </div>

      <ng-template #altWidgetHeader>
        <h4>Today's Weather</h4>
      </ng-template>

      <ng-template #altWidgetContent let-widgetState>
        <div class="emoji">
          {{ widgetState.data.skyCondition === 'sunny' ? '🌞' : '' }}
          {{ widgetState.data.skyCondition === 'cloudy' ? '⛅' : '' }}
        </div>
        <div>{{ widgetState.data.temperature }} °C</div>
      </ng-template>

      <ng-template #altWidgetActions>
        <app-custom-widget-actions></app-custom-widget-actions>
      </ng-template>
    </div>`,
  styles: `
  .nto-wrapper {
    display: flex;
    gap: 10px;
  }
  .emoji {
    font-size: 50px;
  }
  `,
})
export class TryingOutNgTemplateOutletComponent {}
