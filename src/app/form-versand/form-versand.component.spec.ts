import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVersandComponent } from './form-versand.component';

describe('FormVersandComponent', () => {
  let component: FormVersandComponent;
  let fixture: ComponentFixture<FormVersandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormVersandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormVersandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
