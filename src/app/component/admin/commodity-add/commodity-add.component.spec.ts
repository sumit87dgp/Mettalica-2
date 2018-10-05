import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityAddComponent } from './commodity-add.component';

describe('CommodityAddComponent', () => {
  let component: CommodityAddComponent;
  let fixture: ComponentFixture<CommodityAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
