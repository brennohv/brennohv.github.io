import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add-itens',
  templateUrl: './todo-add-itens.component.html',
  styleUrls: ['./todo-add-itens.component.scss']
})
export class TodoAddItensComponent implements OnInit {

  newTask: string = ''
  @Output() newTaskEmiter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  emiterNewTask() {
    if (this.newTask.trim().length) {
      this.newTaskEmiter.emit(this.newTask)
      this.newTask =''
    }
  }
}
