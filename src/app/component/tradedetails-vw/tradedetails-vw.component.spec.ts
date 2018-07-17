import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradedetailsVwComponent } from './tradedetails-vw.component';

describe('TradedetailsVwComponent', () => {
  let component: TradedetailsVwComponent;
  let fixture: ComponentFixture<TradedetailsVwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradedetailsVwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradedetailsVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
