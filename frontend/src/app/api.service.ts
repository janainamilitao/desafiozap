import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiServive {
  baseUrl: string = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  addObject(path: string, user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}${path}`, user);
  }

  getObjects(path: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + path, 
        {headers: this.httpHeaders}
      );
  }

  getObject(path: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${path}${id}`);
  }

  updateObject(path: string, user: any): Observable<any> {
    const url = `${this.baseUrl}${path}${user.id}/`;
    return this.http.put<any>(url, user);
  }

  deleteObject(path: string, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}${path}${id}/`);
  }

}