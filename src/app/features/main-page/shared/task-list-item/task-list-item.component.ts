import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
  @Input() taskName: string = '';
  @Input() taskDescription: string = '';
  @Input() taskDate: string = '';
  @Input() taskPriority: string = '';
  @Input() taskState: string = '';
  @Input() taskCategory: string = '';


}
