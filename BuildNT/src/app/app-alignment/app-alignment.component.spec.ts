import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAlignmentComponent } from './app-alignment.component';

describe('AppAlignmentComponent', () => {
  let component: AppAlignmentComponent;
  let fixture: ComponentFixture<AppAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAlignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
