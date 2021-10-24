import { Component, OnInit } from '@angular/core';
import { announceService } from "../_services/announce.service";
import {  Subject } from 'rxjs';





@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUIComponent implements OnInit {
  private Search = new Subject<string>()

  constructor(private announceService: announceService) {}

  target:any
  article:any 
  

  ngOnInit(): void {
    
  }

  onKey(e:any){
    this.target = e.target.value
  }

   getData(){
    this.announceService.getAnnounces(this.target).subscribe(data => {
      this.article = data  
     
    })  
   }


}
