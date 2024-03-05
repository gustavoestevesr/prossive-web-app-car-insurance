import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSeguroComponent } from './components/cadastro-seguro/cadastro-seguro.component';
import { ListarSeguroComponent } from './components/listar-seguro/listar-seguro.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cadastro-seguro' },
  { path: 'cadastro-seguro', component: CadastroSeguroComponent},
  { path: 'listar-seguro', component: ListarSeguroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
