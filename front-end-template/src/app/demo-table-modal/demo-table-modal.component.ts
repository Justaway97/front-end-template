import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../form/form.component';
import { AppService } from '../services/app.service';
import { formData } from './demo-table-modal.component.constant';

@Component({
  selector: 'app-demo-table-modal',
  templateUrl: './demo-table-modal.component.html',
  styleUrls: ['./demo-table-modal.component.scss'],
})
export class DemoTableModalComponent extends FormComponent {
  constructor(
    protected override fb: FormBuilder,
    private appService: AppService,
    protected override cdr: ChangeDetectorRef,
    protected snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DemoTableModalComponent>
  ) {
    super(fb, cdr);
  }

  override ngOnInit(): void {
    this.formData = formData;
    super.ngOnInit();
  }

  onDialogClose() {
    this.dialogRef.close({ event: 'Close' });
  }

  override onFormSubmit() {
    super.onFormSubmit();
    this.appService.post('table/add', this.data);
    this.clearAllData();
    this.dialogRef.close({ event: 'Add' });
  }
}
