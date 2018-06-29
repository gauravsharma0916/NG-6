import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class UserService {
  
   private _url = '../data/facilities.json';
  // private _url = 'https://jsonplaceholder.typicode.com/users'
  

  constructor(private http: HttpClient) { }
  getData (){
    return this.http.get(this._url);
  }

}  
