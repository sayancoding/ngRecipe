import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from "../components/servers/server.component";
import { SubServerComponent } from './sub-server/sub-server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SubServerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
