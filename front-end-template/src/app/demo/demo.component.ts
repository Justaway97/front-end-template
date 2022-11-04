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
  buttonTooltip,
  buttonTooltipPosition,
  checkboxChecked1,
  checkboxLabel,
  checkboxLabel1,
  checkboxOptions,
  checkboxOptions1,
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
  tableDataSource,
  tableHeaders,
  toolbarItems,
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
  buttonTooltip = buttonTooltip;
  buttonTooltipPosition = buttonTooltipPosition;

  //button toggle
  buttonToggleOptions = buttonToggleOptions;

  //checkbox
  checkboxLabel = checkboxLabel;
  checkboxOptions = checkboxOptions;
  checkboxLabel1 = checkboxLabel1;
  checkboxOptions1 = checkboxOptions1;
  checkboxChecked1 = checkboxChecked1;

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

  //table
  tableDataSource = tableDataSource;
  tableHeaders = tableHeaders;

  //toolbar
  toolbarItems = toolbarItems;

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

  onCheckboxChange($event: any) {
    console.log($event);
    const index = this.checkboxOptions1.findIndex(
      (option) => option === $event[$event.length - 1]
    );
    if (index === 0) {
      let checkboxControl = this.form.get('checkbox')?.value;
      this.checkboxOptions.forEach((option, index) => {
        if (!checkboxControl.includes(option as never)) {
          checkboxControl.push(option as never);
        } else {
          checkboxControl = checkboxControl.filter(
            (check: any) => check !== option
          );
        }
      });
      checkboxControl = checkboxControl;
    }
    // this.checkboxOptions.forEach((_, index) => {
    //   this.checkboxOptions[index].check = $event[0].check; // can select which checkbox to have the check all function
    // });
    // this.checkboxOptions = [...this.checkboxOptions];
    // console.log(this.checkboxOptions);
  }
}
