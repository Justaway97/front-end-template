import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTableModalComponent } from './demo-table-modal.component';

describe('DemoTableModalComponent', () => {
  let component: DemoTableModalComponent;
  let fixture: ComponentFixture<DemoTableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoTableModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
