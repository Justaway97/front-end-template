import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent extends BaseComponent {
  constructor() {
    super();
    if (this.placeholder === '') {
      this.placeholder = 'Choose a date';
    }
  }

  override ngOnInit(): void {}

  override formatAndReturnValue() {
    this.value = (this.value[0].value as Date).getTime();
    super.formatAndReturnValue();
  }
}
