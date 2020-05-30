import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackBoxComponent } from './black-box/black-box.component';
import { WhiteBoxComponent } from './white-box/white-box.component';
import { ColumnsComponent } from './columns/columns.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackBoxComponent,
    WhiteBoxComponent,
    ColumnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
