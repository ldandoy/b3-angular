import { Routes } from '@angular/router';

import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NewPostsComponent } from './components/new-posts/new-posts.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [{
    path: '',
    component: HomeComponent,
    title: 'Home page'
},{
    path: 'posts',
    component: ListPostsComponent,
    title: 'List posts page'
},{
    path: 'posts/new',
    component: NewPostsComponent,
    title: 'New post page'
},{
    path: 'todos',
    component: ListTodosComponent,
    title: 'List todos page'
}];
