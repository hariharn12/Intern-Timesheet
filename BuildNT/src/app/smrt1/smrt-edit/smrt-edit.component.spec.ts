import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmrtEditComponent } from './smrt-edit.component';

describe('SmrtEditComponent', () => {
  let component: SmrtEditComponent;
  let fixture: ComponentFixture<SmrtEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmrtEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmrtEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
