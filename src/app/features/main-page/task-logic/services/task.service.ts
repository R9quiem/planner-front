import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../../auth/services/auth.service";
import {catchError, Observable, throwError} from "rxjs";
import {Task} from "../models/Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private backendUrl = 'http://localhost:8080/api';

  public categories: string[] = ["Работа","Дом","Фитнес", "Отдых"];
  constructor(private http: HttpClient, private authService: AuthService) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.backendUrl}/tasks`);
  }

  getTaskById(id: number): Observable<any> {
    return this.http.get<any>(`${this.backendUrl}/task/${id}`);
  }

  createTask(taskData: any): Observable<any> {
    return this.http.post<any>(`${this.backendUrl}/task`, taskData);
  }

  updateTask(id: number , updatedTaskData: any): Observable<any> {
    return this.http.put<any>(`${this.backendUrl}/task/${id}`, updatedTaskData);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.backendUrl}/task/${id}`);
  }

  deleteAllTasks(): Observable<any> {
    return this.http.delete<any>(`${this.backendUrl}/tasks`);
  }
}
