import {ChangeDetectorRef, Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskService} from "../task-logic/services/task.service";
import {AuthService} from "../../../auth/services/auth.service";
import {Task} from "../task-logic/models/Task";
import {InlineTaskCreationComponent} from "../shared/inline-task-creation/inline-task-creation.component";
import {DatePipe} from "@angular/common";

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

//
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private taskService: TaskService,
    public datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      for(let i = 0; i < tasks.length; i++) {
        console.log(tasks[i].taskDate);
      }
      this.tasks = tasks;
      console.log(tasks);
      if(tasks.length>0)
        this.isZeroTasks = false;
      else
        this.isZeroTasks = true;
      this.updateIsZeroTasks();
    });
  }

  public updateIsZeroTasks() {
    const visibleTasks = this.tasks.filter(task => task.state !== 'DONE');
    this.isZeroTasks = visibleTasks.length === 0;
    console.log(this.isZeroTasks)
  }

  protected readonly Date = Date;
}
