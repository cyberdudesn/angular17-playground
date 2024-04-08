import { Component } from '@angular/core';
import { CanColorDirective } from '../directives/can-color.directive';
import { CanAppearanceDirective } from '../directives/can-appearance.directive';
import { CanDisabledDirective } from '../directives/can-disabled.directive';

@Component({
  selector: 'button[df-button], a[df-button]',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styles: `
  :host {
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  `,
  hostDirectives: [
    {
      directive: CanAppearanceDirective,
      inputs: ['appearance: type'],
    },
    {
      directive: CanColorDirective,
      inputs: ['color'],
    },
    {
      directive: CanDisabledDirective,
      inputs: ['disabled'],
    },
  ],
})
export class ButtonComponent {}
