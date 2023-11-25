import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent} from "./core/auth/auth.component";
import { TaskListComponent} from "./features/task-list/task-list.component";
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule} from "./app-routing.module";
import { MainPageComponent } from './features/main-page/main-page.component';
import { MenuComponent } from './features/main-page/menu/menu.component';
import {RegisterComponent} from "./core/auth/register/register.component";
import {LoginComponent} from "./core/auth/login/login.component";
import { HeaderComponent } from './features/main-page/header/header.component';
import { TodayComponent } from './features/task-list/today/today.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AllTasksComponent } from './features/task-list/all-tasks/all-tasks.component';
import { CalenderComponent } from './features/task-list/calender/calender.component';
import { ProjectComponent } from './features/task-list/project/project.component';
import { BackgroundComponent } from './features/main-page/background/background.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    TaskListComponent,
    HomeComponent,
    MainPageComponent,
    MenuComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
