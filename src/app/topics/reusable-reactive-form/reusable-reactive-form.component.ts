import { Component, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reusable-reactive-form',
  template: `<h2>Reusable Reactive Form Component</h2>
    <main>
      <form [formGroup]="formGroup" (ngSubmit)="onSubmit()">
        <div class="form-field">
          <label>Display Name</label>
          <input formControlName="displayName" />
        </div>
        <app-address-group
          controlKey="deliveryAddress"
          label="Delivery Address"
        ></app-address-group>
        <app-address-group
          controlKey="billingAddress"
          label="Billing Address"
        ></app-address-group>
        <button type="submit">Submit</button>
      </form>
    </main>`,
})
export class ReusableReactiveFormComponent {
  formGroup = new FormGroup({
    displayName: new FormControl(),
  });

  onSubmit() {
    console.log(this.formGroup.value);
    this.formGroup.reset();
  }
}
