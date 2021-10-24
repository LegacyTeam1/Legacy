import { Component, OnInit } from "@angular/core";
import { announceService } from "../_services/announce.service";


@Component({
  selector: "app-houses",
  templateUrl: "./houses.component.html",
  styleUrls: ["./houses.component.scss"],
})
export class HousesComponent implements OnInit {
 

  posts: any;
  constructor(private announceService: announceService) {}
  ngOnInit(): void {
    this.getHouses()
  }
  getHouses(){
    this.announceService.getCars().subscribe(data=>{
      this.posts = data 
    })
  }

}
