import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  formData: any;

  constructor(protected fb: FormBuilder) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.initFind();
  }

  initFind() {
    this.postFind();
  }

  postFind() {
    this.initForm();
  }

  initForm() {
    let dataKeys = Object.keys(this.formData);
    for (const key of dataKeys) {
      this.form.addControl(key, new FormControl(this.formData[key]));
    }
  }

  resetForm() {
    let dataKeys = Object.keys(this.formData);
    for (const key of dataKeys) {
      this.form.get(key)?.patchValue(this.formData[key]);
    }
  }

  onChange(value: any, formControlName: string) {
    console.log(value);
    this.form.get(formControlName)?.patchValue(value);
    console.log(formControlName, this.form.get(formControlName));
  }
}
