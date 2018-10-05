import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEditAddComponent } from './country-edit-add.component';

describe('CountryEditAddComponent', () => {
  let component: CountryEditAddComponent;
  let fixture: ComponentFixture<CountryEditAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryEditAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryEditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
