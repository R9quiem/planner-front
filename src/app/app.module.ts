import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './views/auth/auth.component';
import { TaskListComponent } from './views/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
  export class AppModule { }
