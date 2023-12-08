import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../auth/services/auth.service";
import {TaskService} from "../task-logic/services/task.service";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent {
  isZeroTasks: boolean = false;
  showTaskCreationWindow() {
    this.isZeroTasks = false;
  }
  closeTaskCreationWindow() {
    this.isZeroTasks = true;
  }
  tasks: any[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      tasks.length=0
      this.tasks = tasks;
      if(tasks.length>0)
        this.isZeroTasks = false;
      else
        this.isZeroTasks = true;
    });
  }
}
