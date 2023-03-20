import { TestBed } from '@angular/core/testing';

import { RicercaApiService } from './ricerca-api.service';

describe('RicercaApiService', () => {
  let service: RicercaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicercaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
