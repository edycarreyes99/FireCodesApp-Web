import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import {environment} from '../environments/environment';
import {ServicioService} from './servicio.service';
import {AuthContentOnlyGuard} from './guard/auth-content-only.guard'

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,

    AngularFireModule.initializeApp(environment.firebaseCOnfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence()

  ],
  providers: [ServicioService,AuthContentOnlyGuard,NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
