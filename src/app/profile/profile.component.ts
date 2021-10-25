
import { Component, OnInit } from '@angular/core';
import { Indata } from '../check';
import { CreateService } from '../_services/create.service';
import { TokenStorageService } from "../_services/token-storage.service";
import { announceService } from "../_services/announce.service";


@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private token: TokenStorageService, private CreateService: CreateService,private announceService:announceService ) {}


  

  userName = localStorage.getItem('username') || ''
  data = new Indata(this.userName,'','',0,0,'','');
  Announces: any
 
  
  onSubmit(){
    this.CreateService.create(this.data).subscribe(
      rst => {
       this.data=  new Indata(this.userName,'','',0,0,'','')
      }
    )
  }

  getUserAnnounce(){
    this.announceService.getUserAnnounces(this.userName).subscribe(data=>{
      this.Announces = data 
    })
  }



  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getUserAnnounce()
  }

  values = '';

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  delete(Announce : any ){
    this.announceService.deleteAnnounce(Announce).subscribe(data=>{
      console.log(data)
    })
  }

}
