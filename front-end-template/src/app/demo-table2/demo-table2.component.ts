import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DemoTableModal2Component } from '../demo-table-modal2/demo-table-modal2.component';
import { FormComponent } from '../form/form.component';
import { AppService } from '../services/app.service';
import {
  dataSource,
  formData,
  headers,
} from './demo-table2.component.constant';

@Component({
  selector: 'app-demo-table2',
  templateUrl: './demo-table2.component.html',
  styleUrls: ['./demo-table2.component.scss'],
})
export class DemoTable2Component extends FormComponent implements OnInit {
  constructor(
    protected override fb: FormBuilder,
    private appService: AppService,
    protected override cdr: ChangeDetectorRef,
    protected snackBar: MatSnackBar,
    public dialog: MatDialog,
    protected router: Router
  ) {
    super(fb, cdr);
  }

  tableDataSource: any[] = JSON.parse(JSON.stringify(dataSource));
  tableHeaders = JSON.parse(JSON.stringify(headers));
  originalTableDataSource: any = JSON.parse(
    JSON.stringify(this.tableDataSource[0])
  );
  newData: any;

  override ngOnInit() {
    this.tableDataSource = JSON.parse(JSON.stringify(dataSource));
    this.tableHeaders = JSON.parse(JSON.stringify(headers));
    this.originalTableDataSource = JSON.parse(
      JSON.stringify(this.tableDataSource[0])
    );
    super.ngOnInit();
  }

  override postFind() {
    let index = 0;
    this.data.data.forEach((d: any) => {
      if (index > 0) {
        this.tableDataSource.push(
          JSON.parse(JSON.stringify(this.originalTableDataSource))
        );
      }
      let keys = Object.keys(d);
      for (let i = 0; i < keys.length; i++) {
        let formatKey = this.formatKeyWithCapital(keys[i]);
        if (this.tableDataSource[index][formatKey]) {
          this.tableDataSource[index][formatKey].value = this.formData.data[
            index
          ][formatKey]
            ? this.formData.data[index][formatKey]
            : d[keys[i]];
        }
      }
      index++;
    });
    this.tableDataSource = [...this.tableDataSource]; // force refresh data to trigger table component onChange
    console.log(this.tableDataSource);
    super.postFind();
  }

  override initFind(): void {
    this.appService.get('table').then(
      (data: any) => {
        this.formatData(data);
        this.formData = JSON.parse(JSON.stringify(formData));
        for (let i = 1; i < data.length; i++) {
          this.formData.data.push(JSON.parse(JSON.stringify(formData.data[0])));
        }
        this.generateFormValue({ data: data });
        super.initFind();
      },
      (error) => {}
    );
  }

  onTableValueChange($event: any) {
    console.log(
      'songming',
      $event,
      this.form.get('data.'.concat($event.index, '.', $event.header))
    );
    this.form
      .get('data.'.concat($event.index, '.', $event.header))
      ?.patchValue($event.$event);
  }

  override onFormSubmit() {
    super.onFormSubmit();
    this.appService.post('table/update', this.data);
  }

  add($event: any) {
    const dialogRef = this.dialog.open(DemoTableModal2Component, {
      maxHeight: '90vh',
      // width: '60%',
    });
    dialogRef.afterClosed().subscribe((event: any) => {
      if (event.event == 'Add' && event.data) {
        this.newData = event.data;
        this.ngOnInit();
      }
    });
  }

  delete($event: any) {
    let selectedId: any = [];
    let index = 0;
    this.form.value.data.forEach((value: any) => {
      if (value.select === true && this.data.data[index].uuid) {
        selectedId.push(this.data.data[index].uuid);
      }
      index++;
    });
    this.appService.delete('table/delete', { id: selectedId.toString() }).then(
      (data: any) => {
        this.ngOnInit();
      },
      (error: any) => {}
    );
  }

  formatData(data: any) {
    if (this.newData) {
      data.push(JSON.parse(JSON.stringify(this.newData)));
      this.newData = null;
    }
  }
}
