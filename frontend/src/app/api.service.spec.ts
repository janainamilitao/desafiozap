import { TestBed } from '@angular/core/testing';

import { ApiServive } from './api.service';

describe('ApiService', () => {
  let service: ApiServive;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServive);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
