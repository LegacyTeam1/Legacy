




import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PhonesComponent } from "./phones/phones.component";
import { HousesComponent } from "./houses/houses.component";
import { CarsComponent } from "./cars/cars.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { JoinComponent } from "./join/join.component";

@NgModule({

  declarations: [
    AppComponent, 
    PhonesComponent,
    HousesComponent,
    ProfileComponent,
    LoginComponent,
    JoinComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
  ],
  



  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
