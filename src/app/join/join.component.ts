import { Component, OnInit } from '@angular/core';
import {UserJoin} from '../check'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  constructor(private http : HttpClient ) { }
   
  welcome = new UserJoin('','','','')
  
  onSubmit(){
    this.http.post('server',this.welcome)
  }

  ngOnInit(): void {
  }

}
