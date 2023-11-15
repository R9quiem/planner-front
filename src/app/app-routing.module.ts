  import { NgModule } from '@angular/core';
  import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
  import {HomeComponent} from "./features/home/home.component";
  import {AuthComponent} from "./core/auth/auth.component";
  import {TaskListComponent} from "./features/task-list/task-list.component";
  import {AppComponent} from "./app.component";
  import {MainPageComponent} from "./features/main-page/main-page.component";

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'main-page', component: MainPageComponent },
    { path: 'task-list', component: TaskListComponent }
    // добавьте больше маршрутов здесь
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
      }),
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
