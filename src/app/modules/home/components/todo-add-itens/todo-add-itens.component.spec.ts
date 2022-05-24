import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddItensComponent } from './todo-add-itens.component';

describe('TodoAddItensComponent', () => {
  let component: TodoAddItensComponent;
  let fixture: ComponentFixture<TodoAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAddItensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
