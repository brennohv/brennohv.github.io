import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { FoodList } from '../modules/home/model/food-list';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  public olhaOEvento = new EventEmitter

  private list: string[] = [];

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:3000/'

  public taskFoodList(): Observable<FoodList[]> {
    return this.http.get<FoodList[]>(`${this.url}foodList`)
    // return this.list
  }

  public newTaskFood(newFood: string): Observable<FoodList> {
    return this.http.post<FoodList>(`${this.url}foodList`, { name: newFood})
  }

  // public newTaskFood(newFood: string) {
  //   this.olhaOEvento.emit(newFood)
  //   return this.list.push(newFood)
  // }
}
