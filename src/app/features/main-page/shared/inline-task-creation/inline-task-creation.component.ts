import {Component, Input} from '@angular/core';
import {TaskService} from "../../task-logic/services/task.service";
import {AllTasksComponent} from "../../all-tasks-page/all-tasks.component";
import {CustomSelectComponent} from "../custom-select/custom-select.component";

@Component({
  selector: 'app-inline-task-creation',
  templateUrl: './inline-task-creation.component.html',
  styleUrls: ['./inline-task-creation.component.css']
})
export class InlineTaskCreationComponent {
  date: Date = new Date();

  isInputFocused = false;
  months = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];
  showDropdown = false;
  creatingTask: boolean = false;

  taskName: string = '';
  taskDescription: string = '';
  taskDate: string = '';
  taskPriority: string = '';
  taskState: string = '';
  taskCategory: string = '';

  constructor(private taskService: TaskService, private allTaskComp: AllTasksComponent) {
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
    const jsonData = JSON.stringify(updatedTaskData);
    this.taskService.createTask(jsonData).subscribe(
      (createdTask: any) => {
        // Уведомление компонента со списком задач о создании новой задачи
        this.allTaskComp.tasks.push(updatedTaskData);
        this.allTaskComp.cdRef.detectChanges();
      },
      error => {
        console.error('Error creating task:', error);
      }
    );
  }
  private mapPriority(value: string): string {
    // Пример простого маппинга, замените его на ваш собственный
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
    console.log(this.taskPriority)
  }
}
