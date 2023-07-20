import { Button } from "ui";
import styles from "../styles.module.css";

interface TodoProps {
  text: string;
  isDone: boolean;
  id: number;
  toggleCallback: (id: number) => void;
  deleteCallback: (id: number) => void;
}

export default function Todo({
  text,
  isDone,
  id,
  toggleCallback,
  deleteCallback,
}: TodoProps) {
  function toggleOnclick() {
    toggleCallback(id);
  }

  function deleteOnClick() {
    deleteCallback(id);
  }

  return (
    <div className={styles.todo}>
      <div onClick={() => toggleOnclick()}>
        {isDone ? "DONE" : "TODO"} - {text}
      </div>
      <Button text="삭제" onClick={() => deleteOnClick()} />
    </div>
  );
}
