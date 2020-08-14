import { TestBed } from '@angular/core/testing';

import { CovidCountryService } from './covid-country.service';

describe('CovidCountryService', () => {
  let service: CovidCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
