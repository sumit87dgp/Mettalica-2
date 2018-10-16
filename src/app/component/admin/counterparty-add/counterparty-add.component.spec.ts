import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterpartyAddComponent } from './counterparty-add.component';

describe('CounterpartyAddComponent', () => {
  let component: CounterpartyAddComponent;
  let fixture: ComponentFixture<CounterpartyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterpartyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterpartyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
