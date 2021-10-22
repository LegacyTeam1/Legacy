import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarsComponent } from "./cars/cars.component";
import { HousesComponent } from "./houses/houses.component";
import { JoinComponent } from "./join/join.component";
import { LoginComponent } from "./login/login.component";
import { MainUIComponent } from "./main-ui/main-ui.component";
import { PhonesComponent } from "./phones/phones.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'join', component: JoinComponent },
  { path: 'mainUI', component: MainUIComponent },
  { path: 'cars', component: CarsComponent } ,
  { path: 'houses', component: HousesComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponent = { LoginComponent };
