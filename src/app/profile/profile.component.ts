import { Component, OnInit } from '@angular/core';
import { Indata } from '../check';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

   constructor(private http:HttpClient){}

 
  data = new Indata('','','',0,0,'','');
  
  submitted = false;

  onSubmit() { 
    this.http.post('server',this.data) }

  ngOnInit(): void {
  }

}
