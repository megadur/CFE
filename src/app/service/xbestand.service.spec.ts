import { TestBed, inject } from '@angular/core/testing';

import { XbestandService } from './xbestand.service';

describe('XbestandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XbestandService]
    });
  });

  it('should be created', inject([XbestandService], (service: XbestandService) => {
    expect(service).toBeTruthy();
  }));
});
