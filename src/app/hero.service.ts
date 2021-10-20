import { Injectable } from '@angular/core';
import {Login} from './login'
import {names} from './mockname'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Observable<Login[]> {
    const heroes = of(names)
    return heroes;
  }
}
