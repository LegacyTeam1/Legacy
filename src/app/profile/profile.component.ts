

import { CreateService } from '../_services/create.service';

import { Component, OnInit } from "@angular/core";
import { Indata } from "../check";
import { HttpClient } from "@angular/common/http";
import { TokenStorageService } from "../_services/token-storage.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  currentUser: any;


   constructor(private CreateService: CreateService,private token: TokenStorageService){}

  userName = localStorage.getItem('username') || ''
  data = new Indata(this.userName,'','',0,0,'','');
  err = ''
  
  
  onSubmit(){
    this.CreateService.create(this.data).subscribe(
      rst => {
       this.data=  new Indata(this.userName,'','',0,0,'','')
      }
    )
    
  }


  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
