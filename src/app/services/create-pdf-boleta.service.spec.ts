import { TestBed } from '@angular/core/testing';

import { CreatePdfBoletaService } from './create-pdf-boleta.service';

describe('CreatePdfBoletaService', () => {
  let service: CreatePdfBoletaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePdfBoletaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
