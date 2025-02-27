import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoType } from '../type';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-todos-item',
  imports: [NgForOf],
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent {
  @Input() Alltodo: TodoType[] = [
    {
      id: 'asad',
      title: 'asad',
      completed: true,
    },
  ];

  @Output() tododelete = new EventEmitter<string>();
  @Output() taskcomplete = new EventEmitter<string>();
  @Output() filterout = new EventEmitter<
    'completed' | 'Notcompleted' | 'All'
  >();
  @Output() clear = new EventEmitter<undefined>();

  deletetask(id: string) {
    this.tododelete.emit(id);
  }
  toggleTask(id: string) {
    this.taskcomplete.emit(id);
  }
  filter(filter: 'completed' | 'Notcompleted' | 'All') {
    this.filterout.emit(filter);
  }
  deleteall() {
    this.clear.emit();
  }
}
