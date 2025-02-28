import { Component } from '@angular/core';
import { AlertType, TodoType } from '../type';
import { TodosFormComponent } from '../todos-form/todos-form.component';
import { TodosItemComponent } from '../todos-item/todos-item.component';
import Swal from 'sweetalert2';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-todos',
  imports: [TodosFormComponent, TodosItemComponent, AlertComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  Alltodo: TodoType[] = JSON.parse(
    localStorage.getItem('angulartodos') || '[]'
  );
  alertshow: AlertType | null = null;
  status: 'All' | 'completed' | 'Notcompleted' = 'All';
  deletetask(id: string) {
    if (this.status !== 'All') {
      this.Alltodo = JSON.parse(localStorage.getItem('angulartodos') || '[]');
    }
    this.Alltodo = this.Alltodo.filter((task) => task.id !== id);
    localStorage.setItem('angulartodos', JSON.stringify(this.Alltodo));
    this.alertshow = {
      message: 'Task deleted successfully',
      type: 'danger',
    };
    setTimeout(() => {
      this.alertshow = null;
    }, 2000);
    if (this.status !== 'All') {
      this.filterout(this.status);
    }
  }

  taskcompleted(id: string) {
    if (this.status !== 'All') {
      this.Alltodo = JSON.parse(localStorage.getItem('angulartodos') || '[]');
    }
    this.Alltodo = this.Alltodo.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const changedtask = this.Alltodo.find((task) => task.id === id);
    const changedtext = changedtask?.completed ? 'completed' : 'Uncompleted';
    localStorage.setItem('angulartodos', JSON.stringify(this.Alltodo));
    this.alertshow = {
      message: `Task marked ${changedtext} successfully`,
      type: 'success',
    };
    setTimeout(() => {
      this.alertshow = null;
    }, 2000);
    if (this.status !== 'All') {
      this.filterout(this.status);
    }
  }

  taskadded(newtodo: TodoType) {
    if (this.status !== 'All') {
      this.Alltodo = JSON.parse(localStorage.getItem('angulartodos') || '[]');
    }
    this.Alltodo.unshift(newtodo);
    localStorage.setItem('angulartodos', JSON.stringify(this.Alltodo));
    this.alertshow = {
      message: 'Task added successfully',
      type: 'success',
    };
    setTimeout(() => {
      this.alertshow = null;
    }, 2000);
    if (this.status != 'All') {
      this.filterout(this.status);
    }
  }

  filterout(filter: 'completed' | 'Notcompleted' | 'All') {
    if (filter === 'completed') {
      this.Alltodo = JSON.parse(localStorage.getItem('angulartodos') || '[]');
      this.Alltodo = this.Alltodo.filter((task) => task.completed === true);
      this.status = 'completed';
    } else if (filter === 'Notcompleted') {
      this.Alltodo = JSON.parse(localStorage.getItem('angulartodos') || '[]');
      this.Alltodo = this.Alltodo.filter((task) => task.completed === false);
      this.status = 'Notcompleted';
    } else if (filter === 'All') {
      this.Alltodo = JSON.parse(localStorage.getItem('angulartodos') || '[]');
      this.status = 'All';
    }
    console.log('console from parent');
  }
  clear() {
    console.log('deleting all from parent');
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.Alltodo = [];
        localStorage.removeItem('angulartodos');
      }
    });
  }
}
