import TodoList from "./components/TodoList";
import styles from "./styles.module.css";

export default function Page() {
  return (
    <div className={styles.todoPage}>
      <div>Chat Page</div>
      <TodoList />
    </div>
  );
}
