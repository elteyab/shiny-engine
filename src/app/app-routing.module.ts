import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusinessHoursComponent} from "./Pages/Business/business-hours/business-hours.component";
import {AllDayMenuComponent} from "./Pages/Business/all-day-menu/all-day-menu.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'all_day_menu', component: AllDayMenuComponent},
  {path: 'business_hours', component: BusinessHoursComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
