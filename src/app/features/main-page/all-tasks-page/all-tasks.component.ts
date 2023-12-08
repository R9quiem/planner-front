import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskService} from "../task-logic/services/task.service";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {
  tasks: any[] = [];
  creatingTask:boolean = false;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
    });
  }

}
