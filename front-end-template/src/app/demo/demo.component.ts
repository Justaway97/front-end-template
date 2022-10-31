import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { FormComponent } from '../form/form.component';
import {
  autoCompleteDisabled,
  autoCompleteLabel,
  autoCompleteOptions,
  autoCompletePlaceholder,
  buttonIconLabel,
  buttonLabel,
  buttonToggleOptions,
  checkboxLabel,
  checkboxOptions,
  datePickerLabel,
  datePickerPlaceholder,
  inputLabel,
  inputPlaceholder,
  menuOptions,
  multiAutoCompleteLabel,
  multiAutoCompleteOptions,
  multiAutoCompletePlaceholder,
  radioLabel,
  radioOptions,
} from './auto-complete.component.constant';
import { formData } from './demo.component.constant';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent extends FormComponent implements OnInit {
  constructor(protected override fb: FormBuilder) {
    super(fb);
  }

  override initFind() {
    this.formData = formData;
    super.initFind();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    console.log(this.form);
  }

  //auto complete
  autoCompleteOptions: string[] = autoCompleteOptions;
  autoCompletePlaceholder = autoCompletePlaceholder;
  autoCompleteDisabled = autoCompleteDisabled;
  autoCompleteLabel = autoCompleteLabel;

  //button
  buttonLabel = buttonLabel;
  buttonIconLabel = buttonIconLabel;

  //button toggle
  buttonToggleOptions = buttonToggleOptions;

  //checkbox
  checkboxLabel = checkboxLabel;
  checkboxOptions = checkboxOptions;

  //multi auto complete
  multiAutoCompleteOptions = multiAutoCompleteOptions;
  multiAutoCompleteLabel = multiAutoCompleteLabel;
  multiAutoCompletePlaceholder = multiAutoCompletePlaceholder;

  //date picker
  datePickerLabel = datePickerLabel;
  datePickerPlaceholder = datePickerPlaceholder;

  //input
  inputLabel = inputLabel;
  inputPlaceholder = inputPlaceholder;

  //menu
  menuOptions = menuOptions;

  //radio
  radioLabel = radioLabel;
  radioOptions = radioOptions;

  autoCompleteChange($event: any) {
    console.log($event.option.value);
  }
  buttonClick($event: any) {
    console.log($event);
  }
  buttonToggleClick(value: any) {
    console.log(value);
  }

  printForm() {
    console.log(this.form);
  }

  menuOutput($event: any) {
    console.log('demo', $event);
  }
}
