import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DemoTableModalComponent } from '../demo-table-modal/demo-table-modal.component';
import { FormComponent } from '../form/form.component';
import { AppService } from '../services/app.service';
import {
  dataSource,
  formData,
  headers,
  tableDataSource,
  tableHeaders,
} from './demo-table.component.constant';

@Component({
  selector: 'app-demo-table',
  templateUrl: './demo-table.component.html',
  styleUrls: ['./demo-table.component.scss'],
})
export class DemoTableComponent extends FormComponent implements OnInit {
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

  tableDataSource: any[] = dataSource;
  tableHeaders = headers;
  originalTableDataSource: any = JSON.parse(
    JSON.stringify(this.tableDataSource[0])
  );

  override ngOnInit() {
    this.tableDataSource = dataSource;
    this.tableHeaders = headers;
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
    this.tableDataSource = [...this.tableDataSource];
    console.log(this.tableDataSource);
    super.postFind();
  }

  override initFind(): void {
    this.appService.get('table').then(
      (data: any) => {
        this.formData = formData;
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
    const dialogRef = this.dialog.open(DemoTableModalComponent, {
      maxHeight: '90vh',
      // width: '60%',
    });
    dialogRef.afterClosed().subscribe((event: any) => {
      if (event.event == 'Add') {
        window.location.reload();
      }
    });
  }

  delete($event: any) {
    let selectedId: any = [];
    let index = 0;
    this.form.value.data.forEach((value: any) => {
      if (value.select === true) {
        selectedId.push(this.data.data[index].uuid);
      }
      index++;
    });
    this.appService
      .delete('table/delete', { id: selectedId.toString() })
      .then(() => {
        window.location.reload();
      });
  }
}
