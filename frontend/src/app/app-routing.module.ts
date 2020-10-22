import { RestritoComponent } from './restrito/restrito.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: VitrineComponent },
  { path: 'restrito', component: RestritoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
