import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private authService: AuthService) {}
  ngOnInit(): void {}

  onSubmit(): void {
    const { username, email, password } = this.form;
    
    this.authService.register(username, email, password).subscribe(
      (data) => {
       
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
