import { Routes } from '@angular/router';

import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';

export const routes: Routes = [{
    path: '',
    component: ListPostsComponent,
    title: 'List posts page'
},{
    path: 'todos',
    component: ListTodosComponent,
    title: 'List todos page'
}];
