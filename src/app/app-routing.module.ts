import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusinessHoursComponent} from "./Pages/Business/business-hours/business-hours.component";

const routes: Routes = [
  {path: 'business_hours', component: BusinessHoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
