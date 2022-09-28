import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDelSolicitanteComponent } from './datos-del-solicitante.component';

describe('DatosDelSolicitanteComponent', () => {
  let component: DatosDelSolicitanteComponent;
  let fixture: ComponentFixture<DatosDelSolicitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDelSolicitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosDelSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
