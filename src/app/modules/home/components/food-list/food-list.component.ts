import { Component, OnInit } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: string[] = []
  constructor(private taskListService: TaskListService) { }


  ngOnInit(): void {
    this.taskListService.olhaOEvento.subscribe({
      next: (res: string) => {
        console.log(res)
        return this.foodList.push(res)
      }
    })
  }

}
