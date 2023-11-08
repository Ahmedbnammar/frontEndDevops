import { Component, OnInit } from '@angular/core';
import {Departement} from "../models/Departements";
import {DepartementServiceService} from "../services/departement-service.service";

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  departements: Departement[] = [];
  newDepartement: Departement = new Departement();
  constructor(private departementService : DepartementServiceService) { }

  ngOnInit(): void {
    this.getDepartements();
  }
  getDepartements(): void {
    this.departementService.getDepartements()
      .subscribe(departements => this.departements = departements);
  }

  addDepartement(): void {
    if (this.newDepartement.nomDepart) {
      this.departementService.addDepartement(this.newDepartement)
        .subscribe(departement => {
          this.departements.push(departement);
          this.newDepartement = new Departement();
        });
    }
  }
}
