import { TestBed } from '@angular/core/testing';

import { ScorerService } from './scorer.service';

describe('ScorerService', () => {
  let service: ScorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
