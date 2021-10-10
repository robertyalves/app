import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GastosPage } from './gastos.page';

describe('GastosPage', () => {
  let component: GastosPage;
  let fixture: ComponentFixture<GastosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GastosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GastosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
