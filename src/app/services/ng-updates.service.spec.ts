import { TestBed } from '@angular/core/testing';

import { NgUpdatesService } from './ng-updates.service';

describe('NgUpdatesService', () => {
  let service: NgUpdatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgUpdatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
