import {Component, EventEmitter, Output} from '@angular/core';
import {TaskService} from "../../task-logic/services/task.service";

@Component({
  selector: 'app-custom-select-category',
  templateUrl: './custom-select-category.component.html',
  styleUrls: ['./custom-select-category.component.css']
})
export class CustomSelectCategoryComponent {
  selectedCategory: any  = '';
  @Output() onChanged = new EventEmitter<string>();
  change(category:string) {
    this.selectedCategory = category;
    this.onChanged.emit(this.selectedCategory);
  }
  constructor(public taskService: TaskService) {
  }

  updateSelectedCategory() {
    this.onChanged.emit(this.selectedCategory);
  }
}
