import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Instructor} from "../models/Instructor";

@Injectable({
  providedIn: 'root'
})
export class InsctructorService {
  private url = 'http://localhost:8089';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  addInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(`${this.url}/api/instructor/add`, instructor, this.httpOptions);
  }

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.url}/api/instructor/all`);

  }
}
