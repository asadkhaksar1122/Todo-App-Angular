import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './my-component/todos/todos.component';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
}
