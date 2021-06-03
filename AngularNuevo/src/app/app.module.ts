import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { NavvarComponent } from './components/navvar/navvar.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavvarComponent,
    SliderComponent,
    HomeComponent,
    RutinasComponent,
    ContactoComponent,
    ErrorComponent,
    FooterComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
