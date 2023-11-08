import { Component, OnInit } from '@angular/core';
import {InsctructorService} from "../services/insctructor.service";
import {Instructor} from "../models/Instructor";

@Component({
  selector: 'app-insctructor',
  templateUrl: './insctructor.component.html',
  styleUrls: ['./insctructor.component.css']
})
export class InsctructorComponent implements OnInit {
  instructors: Instructor[] = [];
  newInstructor: Instructor = {} as Instructor;

  constructor(private instructorService: InsctructorService) { }

  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors(): void {
    this.instructorService.getInstructors()
      .subscribe((instructors: Instructor[]) => {
        this.instructors = instructors;
      });
  }

  addInstructor(): void {
    if (this.newInstructor.firstName && this.newInstructor.lastName) {
      this.instructorService.addInstructor(this.newInstructor)
        .subscribe((instructor: Instructor) => {
          this.instructors.push(instructor);
          this.newInstructor = {} as Instructor;
        });
    }
  }
}
