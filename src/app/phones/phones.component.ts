import { Component, OnInit } from '@angular/core';
import { ANNONCES } from '../annouces';
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  
  phones = ANNONCES;

  constructor() {}
  
   
  ngOnInit(): void {
  }

}
