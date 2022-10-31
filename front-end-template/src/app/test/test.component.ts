import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent extends BaseComponent {
  myControl = new FormControl('');
  @Input() options: string[];
  filteredOptions: Observable<string[]>;

  constructor() {
    super();
  }

  override ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        console.log(value);
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

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
