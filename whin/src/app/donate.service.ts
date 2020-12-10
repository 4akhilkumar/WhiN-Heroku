import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class DonateService {  
  constructor(private http: HttpClient,
  private _router: Router) { }
    donate(link2){
      return this.http.post("https://whin-heroku.herokuapp.com/donate/donate",link2)
    }
    getdonate(id){
      return this.http.get(`https://whin-heroku.herokuapp.com/donate/getdonates/${id}`)
    }
}