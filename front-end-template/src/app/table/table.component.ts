import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() headers: any[];
  @Input() dataSource: any[];
  @Output() onTableChange = new EventEmitter();

  header: string[];

  // checkbox
  checkboxValue: any[] = [];
  checkboxOptions: any[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChange) {
    console.log(this.dataSource);
    this.dataSource.forEach((data, index) => {
      if (data.select?.value === true) {
        this.checkboxValue.push(index);
      }
      this.checkboxOptions.push(index);
    });
    if (this.headers) {
      this.header = this.headers.map((h) => h.header);
    }
  }

  ngOnInit(): void {}

  onHeaderCheckboxChange($event: any, header: any, index: number) {
    this.onTableChange.emit({
      $event: this.dataSource[index][header]?.value == true ? false : true,
      header,
      index,
    });
  }

  menuOutput($event: any) {
    console.log($event);
  }

  onChange($event: any, header: any, index?: number) {
    console.log(index);
    if (typeof $event != 'object' || $event instanceof Array)
      this.onTableChange.emit({ $event, header, index });
  }
}
