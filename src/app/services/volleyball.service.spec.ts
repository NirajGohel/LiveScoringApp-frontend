import { TestBed } from '@angular/core/testing';

import { VolleyballService } from './volleyball.service';

describe('VolleyballService', () => {
  let service: VolleyballService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolleyballService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
