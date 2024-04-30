import { Component, Input, OnInit, SkipSelf, inject } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-address-group',
  standalone: true,
  imports: [ReactiveFormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, { skipSelf: true }),
    },
  ],
  template: `
    <fieldset [formGroupName]="controlKey">
      <legend>{{ label }}</legend>
      <div class="form-field">
        <label>Zip Code</label>
        <input formControlName="zipCode" />
      </div>
      <div class="form-field">
        <label>Street</label>
        <input formControlName="street" />
      </div>
    </fieldset>
  `,
})
export class AddressGroupComponent implements OnInit {
  @Input({ required: true }) controlKey = '';
  @Input() label = '';

  parentContainer = inject(ControlContainer);

  get parentFromGroup() {
    return this.parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentFromGroup.addControl(
      this.controlKey,
      new FormGroup({
        zipCode: new FormControl(''),
        street: new FormControl(''),
      })
    );
  }
}
