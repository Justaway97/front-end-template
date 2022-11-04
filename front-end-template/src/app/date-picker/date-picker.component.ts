import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, SimpleChange } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent extends BaseComponent {
  dateControl: FormControl;
  getTomorrow() {}
  constructor(protected cdr: ChangeDetectorRef, private datePipe: DatePipe) {
    super();
    if (this.placeholder === '') {
      this.placeholder = 'Choose a date';
    }
  }

  // any value change need to reflect in html can use ngOnChanges to detect the changes
  ngOnChanges(changes: SimpleChange) {
    if (typeof this.value !== 'object') {
      this.value = this.datePipe.transform(new Date(+this.value), 'yyyy-MM-dd');
    }
  }

  override ngOnInit(): void {}

  override formatAndReturnValue() {
    this.value = (this.value[0].value as Date).getTime();
    super.formatAndReturnValue();
  }
}
