import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdlselectComponent } from './ddlselect.component';

describe('DdlselectComponent', () => {
  let component: DdlselectComponent;
  let fixture: ComponentFixture<DdlselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdlselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdlselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
