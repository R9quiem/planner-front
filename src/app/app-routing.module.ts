  import { NgModule } from '@angular/core';
  import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
  import {HomeComponent} from "./features/home/home.component";
  import {AuthComponent} from "./core/auth/auth.component";
  import {TaskListComponent} from "./features/task-list/task-list.component";
  import {MainPageComponent} from "./features/main-page/main-page.component";
  import {TodayComponent} from "./features/task-list/today/today.component";
  import {ProjectComponent} from "./features/task-list/project/project.component";

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'tasks', component: TaskListComponent },
    { path: 'main', component: MainPageComponent },
    { path: 'task', component: TaskListComponent },
    { path: 'today', component: TodayComponent },
    { path: 'project', component: ProjectComponent }
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
  export class AppRoutingModule {

  }
