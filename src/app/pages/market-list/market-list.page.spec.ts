import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketListPage } from './market-list.page';

describe('MarketListPage', () => {
  let component: MarketListPage;
  let fixture: ComponentFixture<MarketListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
