import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectteamComponent } from './projectteam.component';

describe('ProjectteamComponent', () => {
  let component: ProjectteamComponent;
  let fixture: ComponentFixture<ProjectteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
