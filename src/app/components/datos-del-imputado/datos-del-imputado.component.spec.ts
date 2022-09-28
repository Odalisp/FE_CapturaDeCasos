import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDelImputadoComponent } from './datos-del-imputado.component';

describe('DatosDelImputadoComponent', () => {
  let component: DatosDelImputadoComponent;
  let fixture: ComponentFixture<DatosDelImputadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDelImputadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosDelImputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
