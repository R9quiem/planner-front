import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent} from "./core/auth/auth.component";
import { TaskListComponent} from "./features/task-list/task-list.component";
import { HomeComponent } from './features/home-page/home.component';
import { AppRoutingModule} from "./app-routing.module";
import { MainPageComponent } from './features/main-page/main-page.component';
import { SidebarComponent } from './features/main-page/shared/sidebar/sidebar.component';
import {RegisterComponent} from "./core/auth/register/register.component";
import {LoginComponent} from "./core/auth/login/login.component";
import { HeaderComponent } from './features/main-page/shared/header/header.component';
import { TodayComponent } from './features/task-list/today-tasks-component/today.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AllTasksComponent } from './features/main-page/all-tasks-component/all-tasks.component';
import { CalenderComponent } from './features/task-list/calender-component/calender.component';
import { ProjectComponent } from './features/task-list/categories-component/project.component';
import { BackgroundComponent } from './features/main-page/shared/background/background.component';
import {AuthInterceptor} from "./core/auth/util/AuthInterceptor";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    TaskListComponent,
    HomeComponent,
    MainPageComponent,
    SidebarComponent,
    HeaderComponent,
    TodayComponent,
    AllTasksComponent,
    CalenderComponent,
    ProjectComponent,
    BackgroundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
