import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackBoxComponent } from './black-box/black-box.component';
import { WhiteBoxComponent } from './white-box/white-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackBoxComponent,
    WhiteBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
