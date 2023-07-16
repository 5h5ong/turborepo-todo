"use client";

import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import { Todo as TodoInterface } from "types";
import Todo from "./Todo";

export default function TodoList() {
  const { data, isLoading, mutate } = useSWR<TodoInterface[]>(
    "/todos",
    fetcher
  );

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
