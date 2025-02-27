// todos-form.component.ts
import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { TodoType } from '../type';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todos-form',
  standalone: true, // Indicate that this is a standalone component
  imports: [ReactiveFormsModule, NgIf, CommonModule], // Import ReactiveFormsModule here
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css'],
})
export class TodosFormComponent {
  todoForm = new FormGroup({
    task: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  @Output() taskadded = new EventEmitter<TodoType>();
  onSubmit() {
    if (this.todoForm.valid) {
      const task = this.todoForm.value.task;
      let newtask: TodoType = {
        id: uuidv4(),
        title: task?.toString() || '',
        completed: false,
      };

      this.taskadded.emit(newtask);
      this.todoForm.reset();
    }
  }
}
