import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './core/auth/auth.component';
import { TaskListComponent } from './features/main-page/task-list.component';
import { HomeComponent } from './features/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { MatCardModule } from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TaskListComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }
