import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent} from "./auth/auth-components/auth.component";
import { TaskListComponent} from "./features/main-page/task-list (не используется)/task-list.component";
import { HomeComponent } from './features/home-component/home.component';
import { AppRoutingModule} from "./app-routing.module";
import { MainPageComponent } from './features/main-page/main-page.component';
import { SidebarComponent } from './features/main-page/shared/sidebar/sidebar.component';
import {RegisterComponent} from "./auth/auth-components/register/register.component";
import {LoginComponent} from "./auth/auth-components/login/login.component";
import { HeaderComponent } from './features/main-page/shared/header/header.component';
import { TodayComponent } from './features/main-page/today-tasks-component/today.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AllTasksComponent } from './features/main-page/all-tasks-page/all-tasks.component';
import { CalenderComponent } from './features/main-page/calender-page/calender.component';
import { ProjectComponent } from './features/main-page/categories-page/project.component';
import { BackgroundComponent } from './features/main-page/shared/background/background.component';
import {AuthInterceptor} from "./auth/util/AuthInterceptor";

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
