import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: TaskList[] = [
    {task: 'Arrumar a casa', checked: true},
    {task: 'Estudar', checked: false},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
