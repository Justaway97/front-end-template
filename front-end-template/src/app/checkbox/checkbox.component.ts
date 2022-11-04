import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent extends BaseComponent {
  @Input() options: string[];
  @Input() layout: string = 'vertical';
  @Input() displayOption = true;
  constructor() {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {}

  override ngOnInit(): void {}
}
