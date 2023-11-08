import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { DepartementsComponent } from './departements/departements.component';
import {HttpClientModule} from "@angular/common/http";
import { InsctructorComponent } from './insctructor/insctructor.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementsComponent,
    InsctructorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
