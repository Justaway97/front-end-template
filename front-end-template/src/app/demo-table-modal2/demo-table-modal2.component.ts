import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from '../form/form.component';
import { AppService } from '../services/app.service';
import { formData } from './demo-table-modal2.component.constant';

@Component({
  selector: 'app-demo-table-modal2',
  templateUrl: './demo-table-modal2.component.html',
  styleUrls: ['./demo-table-modal2.component.scss'],
})
export class DemoTableModal2Component extends FormComponent {
  constructor(
    protected override fb: FormBuilder,
    private appService: AppService,
    protected override cdr: ChangeDetectorRef,
    protected snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DemoTableModal2Component>
  ) {
    super(fb, cdr);
  }

  override ngOnInit(): void {
    this.formData = JSON.parse(JSON.stringify(formData));
    this.originalFormData = JSON.parse(JSON.stringify(formData));
    super.ngOnInit();
  }

  onDialogClose() {
    this.dialogRef.close({ event: 'Close' });
  }

  override onFormSubmit() {
    super.onFormSubmit();
    let newData = JSON.parse(JSON.stringify(this.data));
    this.clearAllData();
    this.dialogRef.close({ event: 'Add', data: newData });
  }
}
