import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKleidungsartComponent } from './form-kleidungsart.component';

describe('FormKleidungsartComponent', () => {
  let component: FormKleidungsartComponent;
  let fixture: ComponentFixture<FormKleidungsartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormKleidungsartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormKleidungsartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
