import { TestBed } from '@angular/core/testing';

import { InsctructorService } from './insctructor.service';

describe('InsctructorService', () => {
  let service: InsctructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsctructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
