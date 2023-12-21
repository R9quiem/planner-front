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
import {
  TaskListItemComponent,
} from './features/main-page/shared/task-list-item/task-list-item.component';
import { InlineTaskCreationComponent } from './features/main-page/shared/inline-task-creation/inline-task-creation.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomSelectComponent } from './features/main-page/shared/custom-select-priority/custom-select.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzIconModule} from "ng-zorro-antd/icon";
import { CustomSelectCategoryComponent } from './features/main-page/shared/custom-select-category/custom-select-category.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {NzMenuModule} from "ng-zorro-antd/menu";
import { DatePipe } from '@angular/common';
registerLocaleData(ru);


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
    TaskListItemComponent,
    InlineTaskCreationComponent,
    CustomSelectComponent,
    CustomSelectCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzSelectModule,
    NzIconModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzMenuModule
  ],
  providers: [
    {

      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: NZ_I18N, useValue: ru_RU
    },
    {
      provide: DatePipe
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
