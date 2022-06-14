import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoAddItensComponent } from './components/todo-add-itens/todo-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { FoodAddComponent } from './components/food-add/food-add.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoAddItensComponent,
    TodoListComponent,
    HomeComponent,
    FoodListComponent,
    FoodAddComponent,
    FormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule, MatCheckboxModule
  ],
  exports: [

  ]
})
export class HomeModule { }
