import { Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../auth/services/auth.service";
import {TaskService} from "../task-logic/services/task.service";
import {InlineTaskCreationComponent} from "../shared/inline-task-creation/inline-task-creation.component";
import {AllTasksComponent} from "../all-tasks-page/all-tasks.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent {

}
