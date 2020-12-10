import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient,
    private _router: Router) { }
    contactus(link3){
      return this.http.post("https://whintth.herokuapp.com/contactus/contactus",link3)
    }
}