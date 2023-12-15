import {ChangeDetectorRef, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskService} from "../task-logic/services/task.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Task} from "../task-logic/models/Task";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent {
  tasks: any[] = [];
  creatingTask:boolean = false;
  isZeroTasks: boolean = false;
  showTaskCreationWindow() {
    this.isZeroTasks = false;

  }
  closeTaskCreationWindow() {
    this.isZeroTasks = true;
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private taskService: TaskService,
    public cdRef: ChangeDetectorRef
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
