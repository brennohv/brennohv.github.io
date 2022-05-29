import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  public olhaOEvento = new EventEmitter

  private list: string[] = [];

  constructor() { }

  public taskFoodList() {
    return this.list
  }

  public newTaskFood(newFood: string) {
    this.olhaOEvento.emit(newFood)
    return this.list.push(newFood)
  }
}
