import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { RestritoComponent } from './restrito/restrito.component';
import { RestritoProdutosComponent } from './restrito-produtos/restrito-produtos.component';
import { RestritoLayoutComponent } from './restrito-layout/restrito-layout.component';
import { RestritoDashboardComponent } from './restrito-dashboard/restrito-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    RestritoComponent,
    RestritoProdutosComponent,
    RestritoLayoutComponent,
    RestritoDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
