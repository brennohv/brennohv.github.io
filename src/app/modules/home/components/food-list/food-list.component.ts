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

    this.taskListService.olhaOEvento.subscribe({
      next: (res: FoodList) => this.foodList.push(res)
    })
  }

}
