import { Component } from '@angular/core';
import {TaskService} from "../../task-logic/services/task.service";

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
  selectedPriority: string = '';
  priorities: string[] = ['Высокий','Средний','Низкий','Без приоритета'];
  showDropdown = false;
  creatingTask: boolean = false;

  constructor(private taskService: TaskService) {
  }

  onInputFocus(): void {
    this.isInputFocused = true;
  }

  onInputBlur(): void {
    this.isInputFocused = false;
  }


  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectPriority(option: string) {
    console.log(this.showDropdown);
    this.selectedPriority = option;
    this.showDropdown = false;
    console.log(this.showDropdown);
  }

  showTaskCreationWindow() {
    this.creatingTask = true;
  }
  closeTaskCreationWindow() {
    this.creatingTask = false;
  }

}
