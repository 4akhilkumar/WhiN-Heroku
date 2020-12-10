import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BookhospitalityService {
  constructor(private http: HttpClient,
    private _router: Router) { }
    bookhospitality(linkbhos){
      console.log(linkbhos)
      return this.http.post("https://whintth.herokuapp.com/bookhospitality/bookhospitality",linkbhos)
    }
    getbooking(id){
      return this.http.get(`https://whintth.herokuapp.com/bookhospitality/getbookhospitalitys/${id}`)
    }
}
