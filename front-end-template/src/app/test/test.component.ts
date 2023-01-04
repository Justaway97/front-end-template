import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, startWith, map } from 'rxjs';
import { BaseComponent } from '../base/base.component';
import { AppService } from '../services/app.service';
import { CodeService } from '../services/code.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent extends BaseComponent {
  myControl = new FormControl('');
  filteredOptions: Observable<string[]>;

  constructor(
    protected override appService: AppService,
    protected override snackBar: MatSnackBar,
    protected override cdr: ChangeDetectorRef,
    protected override codeService: CodeService
  ) {
    super(appService, snackBar, cdr, codeService);
  }

  override ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const v = value?.toLowerCase() as string;
        return this.options.filter((option) => {
          return option.toLowerCase().includes(v);
        });
      })
    );
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );
  }
}
