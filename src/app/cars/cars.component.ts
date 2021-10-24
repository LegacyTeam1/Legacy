import { Component, OnInit } from '@angular/core';
import { ANNONCES } from '../annouces';
import { announceService } from "../_services/announce.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: any
  constructor(private announceService:announceService) { }

  

  ngOnInit(): void {
   this.getCars()
  }
  
  getCars(){
    this.announceService.getCars().subscribe(data=>{
      this.cars = data 
    })
  }
}
