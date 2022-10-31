import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends BaseComponent {
  @Input() options: string[];
  @Input() layout: string = 'vertical';
  constructor() {
    super();
    this.value = [];
  }

  override ngOnInit(): void {}
}
