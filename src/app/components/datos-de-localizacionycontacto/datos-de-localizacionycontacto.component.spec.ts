import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDeLocalizacionycontactoComponent } from './datos-de-localizacionycontacto.component';

describe('DatosDeLocalizacionycontactoComponent', () => {
  let component: DatosDeLocalizacionycontactoComponent;
  let fixture: ComponentFixture<DatosDeLocalizacionycontactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosDeLocalizacionycontactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosDeLocalizacionycontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
