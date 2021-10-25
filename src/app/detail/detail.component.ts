import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { announceService } from "../_services/announce.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private announceService:announceService

  ) { }

  Announce:any

  id = String(this.route.snapshot.paramMap.get('id'))
  ngOnInit(): void {
    this.getAnnounce()
  }

  getAnnounce(){
    this.announceService.getOneAnnounce(this.id).subscribe(data=>{
     this.Announce= data 
    })
  }

  goBack(): void {
    this.location.back();
  }

}
