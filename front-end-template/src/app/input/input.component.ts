import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from '../base/base.component';
import { AppService } from '../services/app.service';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseComponent {
  inputControl: any = new FormControl('');
  @Output() inputChange = new EventEmitter();

  constructor(
    protected override appService: AppService,
    protected override snackBar: MatSnackBar,
    protected override cdr: ChangeDetectorRef,
    protected override codeService: CodeService
  ) {
    super(appService, snackBar, cdr, codeService);
  }

  override ngOnInit(): void {}

  onBlur() {
    this.value = this.inputControl.value;
    this.inputChange.emit(this.value);
  }

  override ngOnChanges(changes: SimpleChanges) {
    super.ngOnChanges(changes);
    if (this.value) {
      this.inputControl = new FormControl(this.value);
    }
  }

  testing(event: any) {
    console.log(event);
  }
}
