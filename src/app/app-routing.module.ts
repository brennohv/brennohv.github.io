import { FormsComponent } from './modules/home/components/forms/forms.component';
import { FoodListComponent } from './modules/home/components/food-list/food-list.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

import { ReactiveFormsComponent } from './modules/home/components/reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "subscribe", component: FoodListComponent },
  { path: "forms", component: FormsComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
