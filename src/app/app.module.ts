


import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { InputformComponent } from "./inputform/inputform.component";
import { FormsModule } from "@angular/forms";
import { CardsComponent } from "./cards/cards.component";
import { CategoryComponent } from "./category/category.component";



@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

    NavBarComponent,
    SidebarComponent,
    InputformComponent,
    CardsComponent,
    CategoryComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
