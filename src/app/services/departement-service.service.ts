import { Injectable } from '@angular/core';

import {Departement} from "../models/Departements";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartementServiceService {

  private url = 'http://localhost:8089/Kaddem/departement';

  constructor(private http: HttpClient) { }

  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`${this.url}/retrieve-all-departements`);
  }

  addDepartement(departement: Departement): Observable<Departement> {
    return this.http.post<Departement>(`${this.url}/add-departement`, departement);
  }
}
