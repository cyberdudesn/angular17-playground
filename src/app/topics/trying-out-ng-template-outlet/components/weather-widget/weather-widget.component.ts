import { Component, Injector, Input, TemplateRef, inject } from '@angular/core';
import { WidgetState } from './services/widget-state.service';
import { WidgetAction } from './services/widget-action.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <ng-container
        [ngTemplateOutlet]="headerTemplate || defaultHeader"
      ></ng-container>

      <ng-template #defaultHeader>
        <h3>Weather Forecast</h3>
      </ng-template>
    </header>
    <section>
      <ng-container
        [ngTemplateOutlet]="contentTemplate || defaultContentTemplate"
        [ngTemplateOutletContext]="{ $implicit: state }"
      ></ng-container>
      <ng-template #defaultContentTemplate>
        <div>Today's temperature: {{ state.data.temperature }} °C</div>
      </ng-template>
    </section>
    <footer>
      <ng-container
        [ngTemplateOutlet]="actionsTemplate || defaultActionTemplate"
        [ngTemplateOutletInjector]="injector"
      ></ng-container>

      <ng-template #defaultActionTemplate>
        <button (click)="actions.reload()">Reload</button>
        <button (click)="actions.copy()">Copy</button>
      </ng-template>
    </footer>
  `,
  styleUrl: './weather-widget.component.scss',
})
export class WeatherWidgetComponent {
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() contentTemplate!: TemplateRef<any>;
  @Input() actionsTemplate!: TemplateRef<any>;

  state = inject(WidgetState);
  actions = inject(WidgetAction);
  injector = inject(Injector);
}
