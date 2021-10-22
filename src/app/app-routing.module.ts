import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CarsComponent } from "./cars/cars.component";
import { HousesComponent } from "./houses/houses.component";
import { JoinComponent } from "./join/join.component";
import { LoginComponent } from "./login/login.component";
import { PhonesComponent } from "./phones/phones.component";
import { ProfileComponent } from "./profile/profile.component";


const routes: Routes = [
  { path: 'login',  component: LoginComponent} ,
  { path: 'join',  component:JoinComponent} ,
  {
    path: "mainUI",
    loadChildren: () =>
      import("./main-ui/main-ui.module").then((m) => m.MainUIModule),
  },
  { path: 'cars',  component: CarsComponent} ,
  { path: 'phones',  component: PhonesComponent} ,
  { path: 'houses',  component: HousesComponent },
  { path: 'profile',  component: ProfileComponent }
  ,
  {path: '', pathMatch:"full",     loadChildren: () =>
  import("./main-ui/main-ui.module").then((m) => m.MainUIModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

