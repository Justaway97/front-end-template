import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent extends BaseComponent {
  @Input() icon: any;
  @Input() options: any[];
  loading = true;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges(); // to solve ng0100 error
    }, 0);
  }
}
