import { Component, OnInit, HostBinding } from '@angular/core';
import { Annouce } from '../annouce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  category = ['houses','cars','phones']
  
  announce = new Annouce('kl','kl',this.category[0],12,152,'eldk');
  
  constructor(private router: Router) {}
  
  submitted = false;

  onSubmit() { this.submitted = true; }

  
  ngOnInit(): void {
  }

}
