import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateemployComponent } from './createemploy.component';

describe('CreateemployComponent', () => {
  let component: CreateemployComponent;
  let fixture: ComponentFixture<CreateemployComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateemployComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateemployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
