import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Form, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../form/form.component';
import { AppService } from '../services/app.service';
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
  toolbarItems,
} from './auto-complete.component.constant';
import { formData } from './demo.component.constant';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent extends FormComponent implements OnInit {
  constructor(
    protected override fb: FormBuilder,
    private appService: AppService,
    protected override cdr: ChangeDetectorRef,
    protected snackBar: MatSnackBar
  ) {
    super(fb, cdr);
    this.appService.getIndex();
  }

  override initFind() {
    this.appService.getHome().subscribe(
      (data) => {
        this.formData = formData;
        this.generateFormValue(data);
        super.initFind();
      },
      (error) => {
        this.snackBar.open(error.error.error, 'OK');
      }
    );
  }

  override onFormSubmit() {
    super.onFormSubmit();
    this.appService.updateHome(this.data).subscribe(
      (data: any) => {
        this.snackBar.open(data.message, 'OK');
        console.log(data.message);
      },
      (error) => {
        this.snackBar.open(error.error.error, 'OK');
      }
    );
  }

  // getValue(value: any) {
  //   console.log('songming', value);
  //   return value;
  // }

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
    this.appService.getIndex();
    console.log(this.form.get('input')?.value);
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
