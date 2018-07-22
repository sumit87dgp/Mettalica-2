import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeEditOrCreateComponent } from './trade-edit-or-create.component';

describe('TradeEditOrCreateComponent', () => {
  let component: TradeEditOrCreateComponent;
  let fixture: ComponentFixture<TradeEditOrCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeEditOrCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeEditOrCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
