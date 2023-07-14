"use client";

import useSWR from "swr";
import fetcher from "../../../utils/fetcher";
import Todo from "./Todo";

export default function TodoList() {
  const { data, isLoading, mutate } = useSWR(
    "http://localhost:4000/todos",
    fetcher
  );

  async function toggleTodoStatus(id: number) {
    await fetch("http://localhost:4000/todos/toggle", {
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
            />
          ))
        : "Loading..."}
    </>
  );
}
