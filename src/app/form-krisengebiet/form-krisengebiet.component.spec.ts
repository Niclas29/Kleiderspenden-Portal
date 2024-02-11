import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKrisengebietComponent } from './form-krisengebiet.component';

describe('FormKrisengebietComponent', () => {
  let component: FormKrisengebietComponent;
  let fixture: ComponentFixture<FormKrisengebietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormKrisengebietComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormKrisengebietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
