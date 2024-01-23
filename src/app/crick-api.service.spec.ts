import { TestBed } from '@angular/core/testing';

import { CrickApiService } from './crick-api.service';

describe('CrickApiService', () => {
  let service: CrickApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrickApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
