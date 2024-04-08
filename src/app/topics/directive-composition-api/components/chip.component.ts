import { Component, EventEmitter, Output } from '@angular/core';
import { CanAppearanceDirective } from '../directives/can-appearance.directive';
import { CanColorDirective } from '../directives/can-color.directive';
import { CanDisabledDirective } from '../directives/can-disabled.directive';

@Component({
  selector: 'app-chip',
  standalone: true,
  template: ` <ng-content></ng-content
    ><button (click)="removeChip()">X</button>`,
  styles: `
  :host {
    padding: 10px 15px;
    border-radius: 30px;
  }
  button {
    border: 0;
    background: transparent;
    opacity: 0.3;
    cursor: pointer;
    font-weight: bold;
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
export class ChipComponent {
  @Output() remove: EventEmitter<void> = new EventEmitter();

  removeChip() {
    this.remove.emit();
  }
}
