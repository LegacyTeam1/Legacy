import { Component, OnInit } from '@angular/core';
import { ANNONCES } from '../annouces';
import {Search} from '../main-ui/main-ui.component'
@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  
  phones = ANNONCES;

  constructor() {console.log(Search)}
  
   
  ngOnInit(): void {
  }

}
