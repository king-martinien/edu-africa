import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeContributorComponent } from './become-contributor.component';

describe('BecomeContributorComponent', () => {
  let component: BecomeContributorComponent;
  let fixture: ComponentFixture<BecomeContributorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BecomeContributorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BecomeContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
