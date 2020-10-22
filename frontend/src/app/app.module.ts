import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { RestritoComponent } from './restrito/restrito.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    RestritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
