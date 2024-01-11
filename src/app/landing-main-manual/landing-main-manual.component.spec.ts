import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMainManualComponent } from './landing-main-manual.component';

describe('LandingMainManualComponent', () => {
  let component: LandingMainManualComponent;
  let fixture: ComponentFixture<LandingMainManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMainManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingMainManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
