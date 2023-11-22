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
  ],
  imports: [ BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
