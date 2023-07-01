import { Body, Controller, Post } from '@nestjs/common';
import { AddTodoDto } from './dtos/add-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Post('add')
  addTodo(@Body() addTodoDto: AddTodoDto) {
    const { text } = addTodoDto;
    this.todosService.add(text);
  }
}
