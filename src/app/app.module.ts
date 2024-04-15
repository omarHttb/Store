import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewMaterialComponent } from './new-material/new-material.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { HttpClientModule }  from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsBoughtComponent } from './materials-bought/materials-bought.component';
import { MaterialsSoldComponent } from './materials-sold/materials-sold.component';
import { MaterialsBoughtListComponent } from './materials-bought-list/materials-bought-list.component';
import { MaterialsSoldListComponent } from './materials-sold-list/materials-sold-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewMaterialComponent,
    MaterialListComponent,
    MaterialsBoughtComponent,
    MaterialsSoldComponent,
    MaterialsBoughtListComponent,
    MaterialsSoldListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
