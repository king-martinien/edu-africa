import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSlideComponent } from './auth-slide.component';

describe('AuthSlideComponent', () => {
  let component: AuthSlideComponent;
  let fixture: ComponentFixture<AuthSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthSlideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
