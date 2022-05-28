import { Component, DoCheck, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: TaskList[] = JSON.parse(localStorage.getItem('list') || '[]')

  constructor() { }

  ngDoCheck(): void {
    if (this.taskList.length) {
      this.sortTaskList()
    }
    this.setLocalStorage()
  }

  setNewTaskList(newTask :string) {
    this.taskList.push({
      task: newTask,
      checked: false
    })
  }

  deleteTask(i: number) {
    const teste = confirm('Tu desejas realmente apagar essa tarefa ?')
    if (teste) {
      this.taskList.splice(i, 1)
    }
  }

  deleteWithoutConfirm(i: number) {
    this.taskList.splice(i, 1)
  }

  lastWord(task: string , i: number) {
    if (!task.length) {
      const confirmação = confirm('deseja excluir a tarefa vazia ?')

      if (confirmação) {
        this.deleteWithoutConfirm(i)
      }
    }
  }

  deleteAll() {
    this.taskList = []
  }

  sortTaskList () {
    this.taskList.sort(( first, second) => Number(first.checked) - Number(second.checked) )
  }

  setLocalStorage() {
    localStorage.setItem('list', JSON.stringify(this.taskList))
  }
}
