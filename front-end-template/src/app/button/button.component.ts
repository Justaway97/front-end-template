import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent extends BaseComponent {
  @Input() color: string = 'primary';
  @Input() isIcon: boolean = false;
  constructor() {
    super();
  }

  override ngOnInit(): void {}
}
