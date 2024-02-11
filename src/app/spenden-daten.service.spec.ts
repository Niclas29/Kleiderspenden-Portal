import { TestBed } from '@angular/core/testing';

import { SpendenDatenService } from './spenden-daten.service';

describe('SpendenDatenService', () => {
  let service: SpendenDatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpendenDatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
