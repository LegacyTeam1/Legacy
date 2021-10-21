import { Component, OnInit } from '@angular/core';
import { ANNONCES } from '../annouces';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars = ANNONCES
  constructor() { }

  ngOnInit(): void {
  }

}
