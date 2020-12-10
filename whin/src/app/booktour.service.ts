import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooktourService {
  constructor(private http: HttpClient,
    private _router: Router) { }
    booktour(linkbtour){
      console.log(linkbtour)
      return this.http.post("https://whin-heroku.herokuapp.com/booktour/booktour",linkbtour)
    }
    getbooking(id){
      return this.http.get(`https://whin-heroku.herokuapp.com/booktour/getbooktours/${id}`)
    }
}
