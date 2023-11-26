  import { NgModule } from '@angular/core';
  import {Routes, RouterModule, PreloadAllModules} from "@angular/router";
  import {HomeComponent} from "./features/home-component/home.component";
  import {AuthComponent} from "./auth/auth-components/auth.component";
  import {TaskListComponent} from "./features/main-page/task-list (не используется)/task-list.component";
  import {MainPageComponent} from "./features/main-page/main-page.component";
  import {TodayComponent} from "./features/main-page/today-tasks-component/today.component";
  import {ProjectComponent} from "./features/main-page/categories-page/project.component";
  import {HeaderComponent} from "./features/main-page/shared/header/header.component";
  import {AllTasksComponent} from "./features/main-page/all-tasks-page/all-tasks.component";
  import {CalenderComponent} from "./features/main-page/calender-page/calender.component";
  import {SidebarComponent} from "./features/main-page/shared/sidebar/sidebar.component";

  const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'main', component: MainPageComponent , children: [
        { path: '', redirectTo: 'all-tasks', pathMatch: 'full' },
        { path: 'all-tasks', component: AllTasksComponent },
        { path: 'today', component: TodayComponent },
        { path: 'categories', component: ProjectComponent },
        { path: 'calendar', component: CalenderComponent },
      ]},
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
      }),
    ],
    declarations: [
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
