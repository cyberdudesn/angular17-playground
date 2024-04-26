import { Injectable } from '@angular/core';

@Injectable()
export class WidgetState {
  get data() {
    return {
      temperature: 22,
      skyCondition: 'cloudy', // 'sunny',
    };
  }
}
