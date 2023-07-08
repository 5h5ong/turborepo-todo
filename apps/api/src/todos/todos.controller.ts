import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddTodoDto } from './dtos/add-todo.dto';
import { TodosService } from './todos.service';
import { SelectTodoDtio } from './dtos/select-todo.dto';

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
  toggleTodo(@Body() toggleTodoDto: SelectTodoDtio) {
    const { id } = toggleTodoDto;
    this.todosService.toggle(id);
  }

  @Post('delete')
  deleteTodo(@Body() deleteTodo: SelectTodoDtio) {
    const { id } = deleteTodo;
    this.todosService.delete(id);
  }
}
