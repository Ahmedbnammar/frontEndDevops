import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DepartementsComponent} from "./departements/departements.component";
import {InsctructorComponent} from "./insctructor/insctructor.component";

const routes: Routes = [
  { path: 'departements', component: DepartementsComponent },
  { path: 'instructor', component: InsctructorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
