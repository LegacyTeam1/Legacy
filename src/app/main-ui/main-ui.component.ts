import { Component, OnInit } from '@angular/core';
import { AuthService } from "../_services/announce.service";



export var Search = '' 
@Component({
  selector: 'app-main-ui',
  templateUrl: './main-ui.component.html',
  styleUrls: ['./main-ui.component.scss']
})
export class MainUIComponent implements OnInit {

  constructor(private authService: AuthService) {}

  target = '' 

  

  ngOnInit(): void {
    this.getData()
  }



   getData(){
    this.authService.getAnnounces().subscribe(data => {
      Search = data
     
    })
   
   }
}
