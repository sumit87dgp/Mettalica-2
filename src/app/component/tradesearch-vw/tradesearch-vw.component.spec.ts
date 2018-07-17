import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradesearchVwComponent } from './tradesearch-vw.component';

describe('TradesearchVwComponent', () => {
  let component: TradesearchVwComponent;
  let fixture: ComponentFixture<TradesearchVwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradesearchVwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradesearchVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
