import { RestritoProdutosFormComponent } from './restrito-produtos-form/restrito-produtos-form.component';
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
      {path : 'produtos/create', component: RestritoProdutosFormComponent},
      {path : 'produtos/editar/:uuid', component: RestritoProdutosFormComponent},
      {path : '', component: RestritoDashboardComponent}
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
