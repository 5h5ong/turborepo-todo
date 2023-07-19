"use client";

import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import { Todo as TodoInterface } from "types";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const { data, isLoading, mutate } = useSWR<TodoInterface[]>(
    "/todos",
    fetcher
  );

  async function createTodo(todoText: string) {
    await fetch("todos/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: todoText,
      }),
    });
    mutate();
  }

  async function toggleTodoStatus(id: number) {
    await fetch("/todos/toggle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    mutate();
  }

  async function todoDelete(id: number) {
    await fetch("/todos/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    mutate();
  }

  return (
    <>
      <AddTodo createNewTodo={createTodo} />
      {!isLoading
        ? data.map((value) => (
            <Todo
              key={`todo-${value.id}`}
              id={value.id}
              text={value.text}
              isDone={value.isDone}
              toggleCallback={toggleTodoStatus}
              deleteCallback={todoDelete}
            />
          ))
        : "Loading..."}
    </>
  );
}
