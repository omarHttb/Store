import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMaterialComponent } from './new-material/new-material.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialsBoughtComponent } from './materials-bought/materials-bought.component';
import { MaterialsBoughtListComponent } from './materials-bought-list/materials-bought-list.component';
import { MaterialsSoldComponent } from './materials-sold/materials-sold.component';
import { MaterialsSoldListComponent } from './materials-sold-list/materials-sold-list.component';

const routes: Routes = [
  {path:"NewMaterial",component:NewMaterialComponent},
  {path:"MaterialList",component:MaterialListComponent},
  {path:"MaterialsBought",component:MaterialsBoughtComponent},
  {path:"MaterialsBoughtList",component:MaterialsBoughtListComponent},
  {path:"MaterialsSold",component:MaterialsSoldComponent},
  {path:"MaterialsSoldList",component:MaterialsSoldListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
