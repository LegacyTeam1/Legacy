import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { JoinComponent } from "./join/join.component";
import { HousesComponent } from "./houses/houses.component";
import { CarsComponent } from "./cars/cars.component";
import { PhonesComponent } from "./phones/phones.component";
import { ProfileComponent } from "./profile/profile.component";
import { MainUIComponent } from "./main-ui/main-ui.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "mainUI",
    component: MainUIComponent,
  },
  {
    path: "join",
    component: JoinComponent,
  },
  {
    path: "phones",
    component: PhonesComponent,
  },
  {
    path: "houses",
    component: HousesComponent,
  },
  {
    path: "cars",
    component: CarsComponent,
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
