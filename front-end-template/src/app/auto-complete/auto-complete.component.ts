import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent extends BaseComponent {
  @Input() options: string[];

  inputControl = new FormControl('');
  filterOptions: Observable<string[]>;

  constructor() {
    super();
    this.filterOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const v = value?.toLowerCase() as string;
        return this.options.filter((option) => {
          return option.toLowerCase().includes(v);
        });
      })
    );
  }

  override formatAndReturnValue(): void {
    this.value = this.value[0].option.value;
    super.formatAndReturnValue();
  }
}
