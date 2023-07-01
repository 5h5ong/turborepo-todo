import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';

@Injectable()
export class TodosService {
  private todosStore: Todo[] = [];

  add(text: string) {
    this.todosStore.push({ text: text, isDone: false });
  }
}
