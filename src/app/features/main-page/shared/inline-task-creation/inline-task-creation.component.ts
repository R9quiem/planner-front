import {Component, Input} from '@angular/core';
import {TaskService} from "../../task-logic/services/task.service";
import {AllTasksComponent} from "../../all-tasks-page/all-tasks.component";
import {CustomSelectComponent} from "../custom-select-priority/custom-select.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-inline-task-creation',
  templateUrl: './inline-task-creation.component.html',
  styleUrls: ['./inline-task-creation.component.css']
})
export class InlineTaskCreationComponent {
  taskDate: Date = new Date();
  taskTime: Date | null = null;
  defaultOpenValue = new Date(0,0,0,0,0,0,0);


  isInputFocused = false;
  showDropdown = false;
  creatingTask: boolean = false;
  taskName: string = '';
  taskDescription: string = '';
  taskPriority: string = '';
  taskState: string = '';
  taskCategory: string = '';
  private formattedDate: any;
  constructor(private taskService: TaskService, private allTaskComp: AllTasksComponent,private datePipe: DatePipe) {
  }

  onInputFocus(): void {
    this.isInputFocused = true;
  }

  onInputBlur(): void {
    this.isInputFocused = false;
  }

  showTaskCreationWindow() {
    this.creatingTask = true;
  }
  closeTaskCreationWindow() {
    this.creatingTask = false;
    this.allTaskComp.updateIsZeroTasks();
  }

  createTask() {
    this.taskPriority = this.mapPriority(this.taskPriority);
    const updatedTaskData = {
      state: "TO_DO",
      name: this.taskName,
      description: this.taskDescription,
      category: this.taskCategory,
      priority: this.taskPriority,
      date: this.taskDate
    };

    this.formattedDate = this.datePipe.transform(this.taskDate, 'yyyy-MM-dd');
    console.log(this.formattedDate);

    const jsonData = JSON.stringify(updatedTaskData);
    this.taskService.createTask(jsonData).subscribe(
      (createdTask: any) => {
        console.log(createdTask)
        this.allTaskComp.tasks = [...this.allTaskComp.tasks,createdTask];
      },
      error => {
        console.error('Error creating task:', error);
      }
    );

  }
  private mapPriority(value: string): string {
    if (value === 'Высокий') {
      return 'HIGH';
    } else if (value === 'Средний') {
      return 'MEDIUM';
    } else if (value === 'Низкий') {
      return 'LOW';
    } else {
      return 'LOWEST';
    }
  }
  handlePriorityChange(event: string) {
    this.taskPriority = event;
  }

  handleCategoryChange(event: string) {
    this.taskCategory = event;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
