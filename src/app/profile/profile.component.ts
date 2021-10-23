import { Component, OnInit } from '@angular/core';
import { Indata } from '../check';
import { HttpClient } from "@angular/common/http";

import { CreateService } from '../_services/create.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   constructor(private CreateService: CreateService){}

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
  }

}
