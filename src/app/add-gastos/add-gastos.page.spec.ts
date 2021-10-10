import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGastosPage } from './add-gastos.page';

describe('AddGastosPage', () => {
  let component: AddGastosPage;
  let fixture: ComponentFixture<AddGastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGastosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
