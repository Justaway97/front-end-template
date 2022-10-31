import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent extends BaseComponent {
  @Input() options: any[];
  @Input() layout = 'vertical';
  constructor() {
    super();
  }

  override ngOnInit(): void {}
}
