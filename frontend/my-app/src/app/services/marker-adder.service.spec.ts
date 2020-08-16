import { TestBed } from '@angular/core/testing';

import { MarkerAdderService } from './marker-adder.service';

describe('MarkerAdderService', () => {
  let service: MarkerAdderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkerAdderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
