import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';

@Injectable()
export class TodosService {
  private todosStore: Todo[] = [];

  add(text: string) {
    this.todosStore.push({
      id: this.todosStore.length,
      text: text,
      isDone: false,
    });
  }

  get() {
    return [...this.todosStore];
  }

  toggle(id: number) {
    const toggledStore = this.todosStore.map((value) =>
      value.id === id ? { ...value, isDone: !value.isDone } : { ...value },
    );
    this.todosStore = [...toggledStore];
  }

  delete(id: number) {
    this.todosStore = this.todosStore.filter((value) => value.id !== id);
  }
}
