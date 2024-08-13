import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditempolyComponent } from './editempoly.component';

describe('EditempolyComponent', () => {
  let component: EditempolyComponent;
  let fixture: ComponentFixture<EditempolyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditempolyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditempolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
