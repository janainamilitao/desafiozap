import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})

export class ApiServive {
  url: string = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, user);
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url + 'users/', 
        {headers: this.httpHeaders}
      );
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}${id}`);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.url}${id}/`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.url}${id}/`);
  }

}