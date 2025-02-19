import { Component } from '@angular/core';
import { TodosFormComponent } from '../todos-form/todos-form.component';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import { TodoType } from '../type';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todos',
  imports: [TodosFormComponent, TodosItemComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  Alltodo: TodoType[] = JSON.parse(
    localStorage.getItem('angulartodos') || '[]'
  );

  deletetask(id: string) {
    this.Alltodo = this.Alltodo.filter((task) => task.id !== id);
    localStorage.setItem('angulartodos', JSON.stringify(this.Alltodo));
   
  }

  taskcompleted(id: string) {
    this.Alltodo = this.Alltodo.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem('angulartodos', JSON.stringify(this.Alltodo));
   
  }
  taskadded(newtodo: TodoType) {
    this.Alltodo.unshift(newtodo);
    localStorage.setItem('angulartodos', JSON.stringify(this.Alltodo));
    
  }
}
