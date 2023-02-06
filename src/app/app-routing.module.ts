import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OperationComponent} from "./operation/operation.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'operation',
    pathMatch: "full"
  },
  {
    path: 'operation',
    component: OperationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
