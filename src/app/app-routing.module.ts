import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'join', loadChildren: () => import('./join/join.module').then(m => m.JoinModule) }, { path: 'mainUI', loadChildren: () => import('./main-ui/main-ui.module').then(m => m.MainUIModule) }, { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) }, { path: 'phones', loadChildren: () => import('./phones/phones.module').then(m => m.PhonesModule) }, { path: 'houses', loadChildren: () => import('./houses/houses.module').then(m => m.HousesModule) }, { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
