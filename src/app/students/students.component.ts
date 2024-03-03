import { Component } from '@angular/core';

@Component({
  selector: 'app-students',  //if add "." ex: .app-students than it becomes class so need to define as a class in a root app
  templateUrl: './students.component.html',  //to fetch full page 

  // template:"<h1> One line code fetching students </h1>",
  styleUrl: './students.component.css',
  preserveWhitespaces:true,
})
export class StudentsComponent {

}
