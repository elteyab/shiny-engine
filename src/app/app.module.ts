import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BusinessHoursComponent} from './Pages/Business/business-hours/business-hours.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BusinessHoursComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
// AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
