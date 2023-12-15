import {Component, Input, SimpleChanges} from '@angular/core';
import {TaskService} from "../../task-logic/services/task.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../../auth/services/auth.service";
import {Task} from "../../task-logic/models/Task";

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
   @Input() taskId!: number;
   @Input() taskName: string = '';
   @Input() taskDescription: string = '';
   @Input() taskDate: string = '';
   @Input() taskPriority: string  = '';
   @Input() taskState: string = '';
   @Input() taskCategory: string = '';
  constructor(
    private taskService: TaskService,
    private authService: AuthService,
  ) {}

  completeTask() {

    this.taskState='DONE';
    const updatedTaskData = { state: this.taskState };
    const jsonData = JSON.stringify(updatedTaskData);
    this.taskService.updateTask(this.taskId, jsonData).subscribe(status => {
      console.log(status);
    })
  }
}
