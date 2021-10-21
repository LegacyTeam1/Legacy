import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CarsComponent } from "./cars/cars.component";
import { HousesComponent } from "./houses/houses.component";
import { LoginComponent } from "./login/login.component";
import { PhonesComponent } from "./phones/phones.component";
import { ProfileComponent } from "./profile/profile.component";

export const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "join",
    loadChildren: () => import("./join/join.module").then((m) => m.JoinModule),
  },
  {
    path: "mainUI",
    loadChildren: () =>
      import("./main-ui/main-ui.module").then((m) => m.MainUIModule),
  },
  { path: 'cars', component: CarsComponent }
   ,
  { path: 'houses', component: HousesComponent },
  { path: 'phones', component: PhonesComponent },
  // {
  //   path: "profile",
  //   loadChildren: () =>
  //     import("./profile/profile.module").then((m) => m.ProfileModule),
  // },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponent = { LoginComponent };
