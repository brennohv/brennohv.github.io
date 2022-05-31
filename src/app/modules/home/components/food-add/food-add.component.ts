import { Component, OnInit } from '@angular/core';
import { TaskListService } from 'src/app/services/task-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  public inputValue: string =''
  constructor(private taskListService: TaskListService) { }

  ngOnInit(): void {
  }

  addNewFood(food: string) {
    this.taskListService.newTaskFood(food).subscribe({
      next: (res) => {
        this.taskListService.olhaOEvento.emit(res)
        alert(`Você acabou de acidionar ${food} a sua lista de comida.`)}
    })
    this.inputValue = ''
  }
}
