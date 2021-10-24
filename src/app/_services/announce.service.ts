import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Observer } from "rxjs";

const AUTH_API = "http://localhost:8888/";

@Injectable({
  providedIn: "root",
})
export class announceService {
  house: any;

  constructor(private http: HttpClient) {}

  getAnnounces(term: string): Observable<any> {
    return this.http.get(AUTH_API + `recherche/${term}`);
  }

  getHouses(): Observable<any> {
    return this.http.get(AUTH_API + `category/Houses`);
  }

  getCars(): Observable<any> {
    return this.http.get(AUTH_API + `category/Cars`);
  }

  getPhones(): Observable<any> {
    return this.http.get(AUTH_API + `category/phones`);
  }
  getAd(id: Number): Observable<any> {
    return this.http.get(AUTH_API + `${id}`)
  }
}
