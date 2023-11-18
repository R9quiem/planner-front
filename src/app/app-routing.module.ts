  import { NgModule } from '@angular/core';
  import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
  import {HomeComponent} from "./features/home/home.component";
  import {AuthComponent} from "./core/auth/auth.component";
  import {TaskListComponent} from "./features/main-page/task-list.component";
  import {AppComponent} from "./app.component";

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'tasks', component: TaskListComponent },
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
