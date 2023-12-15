import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent {
  selectedPriority: any  = '';
  selectedPriorityColor: any = '';
  @Output() onChanged = new EventEmitter<string>();
  change(priority:string) {
    this.selectedPriority = priority;
    this.onChanged.emit(this.selectedPriority);
  }
  updateSelectedPriorityColor(): void {
    // Определите цвет и название приоритета на основе выбранной опции
    this.onChanged.emit(this.selectedPriority);
    switch (this.selectedPriority) {
      case 'Высокий':
        this.selectedPriorityColor = '#d1453b';
        break;
      case 'Средний':
        this.selectedPriorityColor = '#e89d37';
        break;
      case 'Низкий':
        this.selectedPriorityColor = '#4249d5';
        break;
      case 'Без приоритета':
        this.selectedPriorityColor = 'transparent';
        break;
      default:
        this.selectedPriorityColor = null;
        break;
    }
  }
}
