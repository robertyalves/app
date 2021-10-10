import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientePage } from './add-cliente.page';

describe('AddClientePage', () => {
  let component: AddClientePage;
  let fixture: ComponentFixture<AddClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
