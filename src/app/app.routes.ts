import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'topic',
        pathMatch: 'full'
    },
    {
        path: 'topic',
        loadChildren: () => import('./topic/topic.module').then(m => m.TopicModule),
    }
];
