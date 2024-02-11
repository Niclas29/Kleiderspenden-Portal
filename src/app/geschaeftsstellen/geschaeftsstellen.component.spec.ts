import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschaeftsstellenComponent } from './geschaeftsstellen.component';

describe('GeschaeftsstellenComponent', () => {
  let component: GeschaeftsstellenComponent;
  let fixture: ComponentFixture<GeschaeftsstellenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeschaeftsstellenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeschaeftsstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
