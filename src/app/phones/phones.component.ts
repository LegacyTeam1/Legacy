import { Component, OnInit } from '@angular/core';
import { ANNONCES } from '../annouces';
import { announceService } from "../_services/announce.service";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  
  phones:any;

  constructor(private announceService: announceService) {}
  
   
  ngOnInit(): void {
    this.getPhones()
  }

  getPhones(){
    this.announceService.getPhones().subscribe(data=>{
      this.phones = data 
      console.log(this.phones)
    })
  }

}
