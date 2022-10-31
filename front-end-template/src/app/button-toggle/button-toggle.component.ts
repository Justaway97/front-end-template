import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
})
export class ButtonToggleComponent extends BaseComponent {
  @Input() options: string[];
  constructor() {
    super();
  }

  override ngOnInit(): void {}

  override formatAndReturnValue() {
    this.value = this.value[0];
    super.formatAndReturnValue();
  }
}
