import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { RestritoComponent } from './restrito/restrito.component';
import { RestritoProdutosComponent } from './restrito-produtos/restrito-produtos.component';
import { RestritoDashboardComponent } from './restrito-dashboard/restrito-dashboard.component';
import { RestritoProdutosFormComponent } from './restrito-produtos-form/restrito-produtos-form.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VitrineComponent,
    RestritoComponent,
    RestritoProdutosComponent,
    RestritoDashboardComponent,
    RestritoProdutosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
