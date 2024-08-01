import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Partial<Todo> = {};
  editingTodo: Todo | null = null;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    if (this.newTodo.title) {
      this.todoService.createTodo({
        ...this.newTodo,
        description: this.newTodo.description || '',
        completed: false
      } as Todo).subscribe(todo => {
        this.todos.push(todo);
        this.newTodo = {};
      });
    }
  }

  editTodo(todo: Todo): void {
    this.editingTodo = todo;
  }

  saveEdit(): void {
    if (this.editingTodo) {
      const updatedTodo = { ...this.editingTodo };
      this.todoService.updateTodo(updatedTodo).subscribe(() => {
        this.todos = this.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
        this.editingTodo = null;
      });
    }
  }

  cancelEdit(): void {
    this.editingTodo = null;
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  toggleComplete(todo: Todo): void {
    const updatedTodo = { ...todo, completed: !todo.completed };
    this.todoService.updateTodo(updatedTodo).subscribe(() => {
      this.todos = this.todos.map(t => t.id === updatedTodo.id ? updatedTodo : t);
    });
  }
}
