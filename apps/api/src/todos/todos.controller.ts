import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddTodoDto } from './dtos/add-todo.dto';
import { TodosService } from './todos.service';
import { ToggleTodoDto } from './dtos/toggle-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get('')
  getTodos() {
    return this.todosService.get();
  }

  @Post('add')
  addTodo(@Body() addTodoDto: AddTodoDto) {
    const { text } = addTodoDto;
    this.todosService.add(text);
  }

  @Post('toggle')
  toggleTodo(@Body() toggleTodoDto: ToggleTodoDto) {
    const { id } = toggleTodoDto;
    this.todosService.toggle(id);
  }
}
