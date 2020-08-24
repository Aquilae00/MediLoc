import { TestBed } from '@angular/core/testing';

import { MapsMarkerService } from './maps-marker.service';

describe('MapsMarkerService', () => {
  let service: MapsMarkerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapsMarkerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
