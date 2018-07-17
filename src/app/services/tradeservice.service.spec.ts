import { TestBed, inject } from '@angular/core/testing';

import { TradeserviceService } from './tradeservice.service';

describe('TradeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradeserviceService]
    });
  });

  it('should be created', inject([TradeserviceService], (service: TradeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
