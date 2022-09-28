import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Componentes del Producto
import { DatosDelSolicitanteComponent } from './components/datos-del-solicitante/datos-del-solicitante.component';
import { DatosDelImputadoComponent } from './components/datos-del-imputado/datos-del-imputado.component';
import { DatosDeLocalizacionycontactoComponent } from './components/datos-de-localizacionycontacto/datos-de-localizacionycontacto.component';
import { CaptacionComponent } from './components/captacion/captacion.component';

//Modulos
import { ReactiveFormsModule } from '@angular/forms';

//Componentes de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosDelSolicitanteComponent,
    DatosDelImputadoComponent,
    DatosDeLocalizacionycontactoComponent,
    CaptacionComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
