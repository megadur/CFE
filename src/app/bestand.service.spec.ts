import { TestBed, inject } from '@angular/core/testing';

import { BestandService } from './bestand.service';

describe('BestandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BestandService]
    });
  });

  it('should be created', inject([BestandService], (service: BestandService) => {
    expect(service).toBeTruthy();
  }));
});
