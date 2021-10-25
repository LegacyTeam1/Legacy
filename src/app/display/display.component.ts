import { Component, OnInit, Input } from "@angular/core";
import { announceService } from "../_services/announce.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.scss"],
})
export class DisplayComponent implements OnInit {
  @Input() house: any;
  constructor(private announceService: announceService) {}

  ngOnInit(): void {
    console.log(this.house);
  }
}
