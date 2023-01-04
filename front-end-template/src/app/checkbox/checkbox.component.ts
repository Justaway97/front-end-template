import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from '../base/base.component';
import { AppService } from '../services/app.service';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends BaseComponent {
  @Input() layout: string = 'vertical';
  @Input() displayOption = true;
  constructor(
    protected override appService: AppService,
    protected override snackBar: MatSnackBar,
    protected override cdr: ChangeDetectorRef,
    protected override codeService: CodeService
  ) {
    super(appService, snackBar, cdr, codeService);
  }

  override ngOnInit(): void {}
}
