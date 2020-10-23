import { RestritoDashboardComponent } from './restrito-dashboard/restrito-dashboard.component';
import { RestritoComponent } from './restrito/restrito.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestritoProdutosComponent } from './restrito-produtos/restrito-produtos.component';

const routes: Routes = [
  { 
    path: '', component: VitrineComponent
  },
  { 
    path: 'restrito', component: RestritoComponent,
    children : [
      {path : 'produtos', component: RestritoProdutosComponent},
      {path : '', component: RestritoDashboardComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
