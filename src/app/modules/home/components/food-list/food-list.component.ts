import { Component, OnInit } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';
import { FoodList } from '../../model/food-list';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: FoodList[] = []
  constructor(private taskListService: TaskListService) { }


  ngOnInit(): void {
    this.taskListService.taskFoodList().subscribe({
      next: (res: FoodList[]) => this.foodList = res
    })

    this.taskListService.foodListMudou.subscribe({
      next: (res: FoodList) => this.taskListService.taskFoodList().subscribe({
        next: (res: FoodList[]) => this.foodList = res
      })
    })
  }

  public deleteFood(id: number) {
    this.taskListService.deleteTaskFood(id).subscribe({
      next: (res: FoodList) => {
        this.taskListService.foodListMudou.emit(res)
        // this.foodList = this.foodList.filter((allFood) => {
        //  return id !== allFood.id
        // })
      }
    })
  }

  public updateFood(value: string, id: number) {
    this.taskListService.updateTaskFood(value, id).subscribe({
      next: (res: FoodList) => {
        this.taskListService.foodListMudou.emit(res)
      }
    })
  }


}
