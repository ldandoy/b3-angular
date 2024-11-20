import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosService } from '../../services/totos.service';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.scss'
})
export class ListTodosComponent {
  todosService = inject(TodosService);
  todoList : Todo[] = [];

  constructor() {
    this.todosService.getTodos().then((todos: Todo[]) => {
      this.todoList = todos;
    });
  }
}
