import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTable2Component } from './demo-table2.component';

describe('DemoTable2Component', () => {
  let component: DemoTable2Component;
  let fixture: ComponentFixture<DemoTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTable2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
