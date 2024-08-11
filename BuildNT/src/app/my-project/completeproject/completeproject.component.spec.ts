import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteprojectComponent } from './completeproject.component';

describe('CompleteprojectComponent', () => {
  let component: CompleteprojectComponent;
  let fixture: ComponentFixture<CompleteprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
