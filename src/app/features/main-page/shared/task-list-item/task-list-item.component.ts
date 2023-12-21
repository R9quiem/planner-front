import {Component, Input, SimpleChanges} from '@angular/core';
import {TaskService} from "../../task-logic/services/task.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../../auth/services/auth.service";
import {Task} from "../../task-logic/models/Task";
import {AllTasksComponent} from "../../all-tasks-page/all-tasks.component";
import {DatePipe} from "@angular/common";

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

  showCheckIcon: boolean = false;
  showAdditionalButtons: boolean = false;
  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private allTaskComp: AllTasksComponent,
    public datePipe: DatePipe
  ) {}

  completeTask() {

    this.taskState='DONE';
    const updatedTaskData = { state: this.taskState };
    const jsonData = JSON.stringify(updatedTaskData);
    this.taskService.updateTask(this.taskId, jsonData).subscribe(status => {
      console.log("YOO")
      this.allTaskComp.updateIsZeroTasks();
    })

  }

  deleteTask() {
    this.taskService.deleteTask(this.taskId).subscribe(status => {
      console.log("удаление задачи " + this.taskId)
      const index = this.allTaskComp.tasks.findIndex(task => task.id == this.taskId);

      // Если элемент найден, удалим его из массива
      if (index != -1) {
        this.taskState='DONE';
        this.allTaskComp.tasks.splice(index, 1);

      }
      this.allTaskComp.updateIsZeroTasks();
    })
  }
}
