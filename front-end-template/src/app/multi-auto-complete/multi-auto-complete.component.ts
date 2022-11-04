import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-multi-auto-complete',
  templateUrl: './multi-auto-complete.component.html',
  styleUrls: ['./multi-auto-complete.component.scss'],
})
export class MultiAutoCompleteComponent extends BaseComponent {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  myFormControl = new FormControl('');
  filteredOptions: Observable<string[]>;
  @Input() options: string[];

  @ViewChild('optionInput') optionInput: ElementRef<HTMLInputElement>;

  constructor() {
    super();
    this.value = [];
    this.filteredOptions = this.myFormControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        if (typeof value === 'string') {
          return this.options.filter((option) => {
            return option.toLowerCase().includes(value.toLowerCase());
          });
        }
        return [];
      })
    );
  }

  override ngOnInit(): void {}

  remove(option: string): void {
    const index = this.value.indexOf(option);

    if (index >= 0) {
      this.value.splice(index, 1);
    }
  }

  override valueChanged(event: any): void {
    if (!this.value.includes(event.option.viewValue)) {
      this.value.push(event.option.viewValue);
    }
    this.optionInput.nativeElement.value = '';
    this.myFormControl.setValue('');
    this.formatAndReturnValue();
  }
}
