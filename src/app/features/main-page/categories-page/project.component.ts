import { Component } from '@angular/core';
import {TaskService} from "../task-logic/services/task.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  selectedCategory: string ='';
  constructor(public taskService: TaskService) {
  }


  selectCategory(category:string) {
    this.selectedCategory = category;
  }
}
