import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'javascript',
    pathMatch: 'full'
  },
  {
    path: 'javascript',
    loadComponent: () => import('./javascript/javascript.component').then(c => c.JavascriptComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicRoutingModule { }
