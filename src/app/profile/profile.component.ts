import { Component, OnInit } from "@angular/core";
import { Indata } from "../check";
import { HttpClient } from "@angular/common/http";
import { TokenStorageService } from "../_services/token-storage.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  constructor(private http: HttpClient, private token: TokenStorageService) {}

  data = new Indata("", "", "", 0, 0, "", "");

  onSubmit() {
    this.http.post("server", this.data);
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
}
