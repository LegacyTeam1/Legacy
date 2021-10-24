import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { announceService } from "../_services/announce.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.scss"],
})
export class HousesComponent implements OnInit {
  @Output() houses: any;

  constructor(
    private announceService: announceService,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.getHouses();
  }
  getHouses() {
    this.announceService.getHouses().subscribe((data) => {
      this.houses = data;
    });
  }
  displayAd(id: Number) {
    this.announceService.getAd(id).subscribe((data) => (this.house = data));
    this.route.navigate(["display"]);
  }
}
