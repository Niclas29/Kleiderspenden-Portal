import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKontaktdatenComponent } from './form-kontaktdaten.component';

describe('FormKontaktdatenComponent', () => {
  let component: FormKontaktdatenComponent;
  let fixture: ComponentFixture<FormKontaktdatenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormKontaktdatenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormKontaktdatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
