import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() color = 'primary';
  @Input() item: any;

  menuOutput($event: any) {
    console.log($event);
  }

  buttonClick($event: any) {
    console.log($event);
  }

  constructor() {}

  ngOnInit(): void {}
}
