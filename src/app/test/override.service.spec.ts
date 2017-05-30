import { TestBed, inject } from '@angular/core/testing';

import { OverrideService } from './override.service';

describe('OverrideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverrideService]
    });
  });

  it('should ...', inject([OverrideService], (service: OverrideService) => {
    expect(service).toBeTruthy();
  }));
});
