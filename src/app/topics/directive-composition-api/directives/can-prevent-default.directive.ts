import { Directive, HostListener, inject } from '@angular/core';
import { CanDisabledDirective } from './can-disabled.directive';

@Directive({
  standalone: true,
})
export class CanPreventDefaultDirective {
  canDisabledDir = inject(CanDisabledDirective);

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onClick(e: Event) {
    if (this.canDisabledDir.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
}
