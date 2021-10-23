import { Component, OnInit } from '@angular/core';
import { Indata } from '../check';
import { HttpClient } from "@angular/common/http";
import {userName} from '../login/login.component'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   constructor(private http:HttpClient){}

 
  data = new Indata(userName,'','',0,0,'','');
  
  onSubmit(){
    
  }


  ngOnInit(): void {
  }

}
