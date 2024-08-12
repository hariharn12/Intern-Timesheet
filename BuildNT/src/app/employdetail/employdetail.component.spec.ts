import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploydetailComponent } from './employdetail.component';

describe('EmploydetailComponent', () => {
  let component: EmploydetailComponent;
  let fixture: ComponentFixture<EmploydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploydetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
