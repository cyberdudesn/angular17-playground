import {
  Directive,
  Host,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { CanPreventDefaultDirective } from './can-prevent-default.directive';

@Directive({
  selector: '[can-disable]',
  standalone: true,
  hostDirectives: [CanPreventDefaultDirective],
})
export class CanDisabledDirective {
  @Input()
  @HostBinding('class.df-disabled')
  disabled = false;

  @HostBinding('attr.disabled')
  protected get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;
  }
}
