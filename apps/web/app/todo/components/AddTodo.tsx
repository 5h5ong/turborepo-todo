"use client";

import { useState } from "react";
import { Button, Input } from "ui";
import styles from "../styles.module.css";

interface AddTodoProps {
  createNewTodo: (todoText: string) => Promise<void>;
}

export default function AddTodo({ createNewTodo }: AddTodoProps) {
  const [value, setValue] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onClick() {
    createNewTodo(value);
    setValue("");
  }

  return (
    <div className={styles.addTodo}>
      <Input
        placeholder="새로운 TODO를 등록해 보세요."
        value={value}
        onChange={onChange}
      />
      <div className={styles.addTodoButtonContainer}>
        <Button text="추가" onClick={onClick} />
      </div>
    </div>
  );
}
