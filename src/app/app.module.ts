
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ProfileComponent } from "./profile/profile.component";
import { PhonesComponent } from "./phones/phones.component";
import {routes} from './app-routing.module'
import { HousesComponent } from './houses/houses.component';
import { CarsComponent } from './cars/cars.component';



@NgModule({

  declarations: [
    AppComponent, 
    ProfileComponent,
    PhonesComponent,
    HousesComponent,
    CarsComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    
  ],
  



  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
