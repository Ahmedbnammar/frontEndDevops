import { TestBed } from '@angular/core/testing';

import { DepartementServiceService } from './departement-service.service';

describe('DepartementServiceService', () => {
  let service: DepartementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
