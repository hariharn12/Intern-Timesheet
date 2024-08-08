import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmrtComponent } from './smrt.component';

describe('SmrtComponent', () => {
  let component: SmrtComponent;
  let fixture: ComponentFixture<SmrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmrtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
