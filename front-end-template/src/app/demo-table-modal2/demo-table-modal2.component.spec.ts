import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTableModal2Component } from './demo-table-modal2.component';

describe('DemoTableModal2Component', () => {
  let component: DemoTableModal2Component;
  let fixture: ComponentFixture<DemoTableModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTableModal2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoTableModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
