import { TestBed } from '@angular/core/testing';

import { HistorialEnvioService } from './historial-envio.service';

describe('HistorialEnvioService', () => {
  let service: HistorialEnvioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorialEnvioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
