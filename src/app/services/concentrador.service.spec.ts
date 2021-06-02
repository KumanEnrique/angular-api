import { TestBed } from '@angular/core/testing';

import { ConcentradorService } from './concentrador.service';

describe('ConcentradorService', () => {
  let service: ConcentradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcentradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
