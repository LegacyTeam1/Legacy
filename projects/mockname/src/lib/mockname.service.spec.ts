import { TestBed } from '@angular/core/testing';

import { MocknameService } from './mockname.service';

describe('MocknameService', () => {
  let service: MocknameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocknameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
