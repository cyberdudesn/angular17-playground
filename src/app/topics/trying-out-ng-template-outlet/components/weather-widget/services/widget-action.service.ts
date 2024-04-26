import { Injectable } from '@angular/core';

@Injectable()
export class WidgetAction {
  copy() {
    console.log('Temperature copied!');
  }
  reload() {
    console.log('Temperature reloaded!');
  }
}
