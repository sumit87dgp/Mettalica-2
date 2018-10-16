import { TestBed, inject } from '@angular/core/testing';

import { DynamicCompIntacService } from './dynamic-comp-intac.service';

describe('DynamicCompIntacService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicCompIntacService]
    });
  });

  it('should be created', inject([DynamicCompIntacService], (service: DynamicCompIntacService) => {
    expect(service).toBeTruthy();
  }));
});
