import { Component } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent {
  creatingTask: boolean = false;
  showTaskCreationWindow() {
    this.creatingTask = true;
  }
  closeTaskCreationWindow() {
    this.creatingTask = false;
  }

}
