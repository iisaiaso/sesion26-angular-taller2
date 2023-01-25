import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {
  urlApi = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.urlApi)
  }
  
}
