import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../check';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  http: HttpClient) { }

  ngOnInit(): void {
  }
  
  user = new UserLogin('','')
  


  onSubmit(){
    this.http.post('server',this.user)
  }

  
}
