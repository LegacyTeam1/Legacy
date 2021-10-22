import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.scss"],
})
export class HousesComponent implements OnInit {
  readonly UrlRoot = "https://jsonplaceholder.typicode.com";

  posts: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.posts = this.http.get(this.UrlRoot + "/photos");
  }
}
