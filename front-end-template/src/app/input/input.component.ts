import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseComponent {
  @ViewChild('myInput') optionInput: ElementRef<HTMLInputElement>;

  constructor() {
    super();
  }

  override ngOnInit(): void {}

  onBlur() {
    this.valueChanged(this.optionInput.nativeElement.value);
  }

  override formatAndReturnValue() {
    this.value = this.value[0];
    super.formatAndReturnValue();
  }
}
