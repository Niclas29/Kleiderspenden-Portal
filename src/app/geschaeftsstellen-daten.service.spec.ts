import { TestBed } from '@angular/core/testing';

import { GeschaeftsstellenDatenService } from './geschaeftsstellen-daten.service';

describe('GeschaeftsstellenDatenService', () => {
  let service: GeschaeftsstellenDatenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeschaeftsstellenDatenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
