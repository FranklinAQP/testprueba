import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  { path: '', component: UsuariosComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'lista', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
