import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementSectionComponent } from './achievement-section.component';

describe('AchievementSectionComponent', () => {
  let component: AchievementSectionComponent;
  let fixture: ComponentFixture<AchievementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AchievementSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AchievementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
