import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'javascript',
    loadComponent: () => import('./javascript/javascript.component').then(c => c.JavascriptComponent)
  },
  {
    path: 'angular',
    loadComponent: () => import('./angular/angular.component').then(c => c.AngularComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
