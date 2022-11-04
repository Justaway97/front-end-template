import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends FormComponent {
  @Input() headers: string[];
  @Input() dataSource: any[];

  // checkbox
  headerCheckbox = false;
  checkboxValue: any[] = [];
  checkboxOptions: any[] = [];

  constructor(protected override fb: FormBuilder) {
    super(fb);
  }

  ngOnChanges(changes: SimpleChange) {
    let allChecked = true;
    this.dataSource.forEach((data) => {
      if (allChecked) {
        allChecked = data.select.value;
      } else {
        return;
      }
    });
    this.dataSource.forEach((data, index) => {
      if (data.select.value === true) {
        this.checkboxValue.push(index);
      }
      this.checkboxOptions.push(index);
    });
    this.headerCheckbox = allChecked;
    console.log(this.headerCheckbox);
  }

  onHeaderCheckboxChange($event: any) {
    console.log($event);
  }

  menuOutput($event: any) {
    console.log($event);
  }

  override ngOnInit(): void {}
}
