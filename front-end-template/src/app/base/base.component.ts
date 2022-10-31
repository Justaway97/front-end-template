import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements ControlValueAccessor {
  @Output() change = new EventEmitter();
  @Input() placeholder: string = '';
  @Input() disabled = false;
  @Input() label: string;

  value: any;
  constructor() {}

  ngOnInit(): void {}

  arrayValueChanged(value: any) {
    console.log(value);
    if (!this.value.includes(value)) {
      this.value.push(value);
    }
    this.formatAndReturnValue();
  }

  valueChanged(...value: any) {
    this.onChange(value);
    this.onTouched();
    this.value = value;
    this.formatAndReturnValue();
  }

  formatAndReturnValue() {
    console.log(this.value);
    this.change.emit(this.value);
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(value: any): void {
    this.value = value;
  }
}
