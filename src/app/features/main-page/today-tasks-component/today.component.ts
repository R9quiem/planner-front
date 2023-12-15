import {Component, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../auth/services/auth.service";
import {TaskService} from "../task-logic/services/task.service";
import {InlineTaskCreationComponent} from "../shared/inline-task-creation/inline-task-creation.component";

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
  priority: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private taskService: TaskService,
  ) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(tasks);
      if(tasks.length>0)
        this.isZeroTasks = false;
      else
        this.isZeroTasks = true;
    });
  }
}
