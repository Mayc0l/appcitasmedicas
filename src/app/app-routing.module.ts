import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrocitasComponent } from './registrocitas/registrocitas.component';
import { MostrarcitasComponent } from './mostrarcitas/mostrarcitas.component';
import { DoctoresComponent } from './doctores/doctores.component';

const routes: Routes = [
  { path: 'registrocitas', component: RegistrocitasComponent},
  {path: 'mostrarcitas', component: MostrarcitasComponent},
  {path: 'doctores', component: DoctoresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
