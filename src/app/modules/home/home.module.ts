import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoAddItensComponent } from './components/todo-add-itens/todo-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodAddComponent } from './components/food-add/food-add.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoAddItensComponent,
    TodoListComponent,
    HomeComponent,
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [

  ]
})
export class HomeModule { }
