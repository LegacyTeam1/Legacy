import { Component, OnInit, Input } from "@angular/core";
import { Check } from "../check";

@Component({
  selector: "app-inputform",
  templateUrl: "./inputform.component.html",
  styleUrls: ["./inputform.component.scss"],
})
export class InputformComponent implements OnInit {
  @Input() name? : Check
  constructor() {}
  ngOnInit(): void {}
}
