import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import Todo from '../models/Todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent, CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.sass',
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  addTodo(title: string) {
    if (title.trim() === '') throw new Error('Todo title  cannot be empty');
    this.todos.push(new Todo(this.todos.length, title, false));
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter((_, i) => i !== id);
  }
  markComplete(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }
}
