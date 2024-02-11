import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendenBestaetigungComponent } from './spenden-bestaetigung.component';

describe('SpendenBestaetigungComponent', () => {
  let component: SpendenBestaetigungComponent;
  let fixture: ComponentFixture<SpendenBestaetigungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendenBestaetigungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpendenBestaetigungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
