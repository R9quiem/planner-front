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
  private backendUrl = 'http://localhost:8080/api/tasks';
  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    // Используйте ваш URL бэкенда здесь
    // Выполните GET-запрос
    this.http.get<any[]>(this.backendUrl).subscribe(
      (data) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error fetching tasks', error);
        console.log(this.authService.getToken());
      }
    );
  }

  createTask() {

  }
}
