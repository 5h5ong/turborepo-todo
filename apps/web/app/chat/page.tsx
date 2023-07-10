import Todo from "./components/Todo";

export default function Page() {
  return (
    <>
      <div>Chat Page</div>
      <Todo text="hello!" isDone={false} />
    </>
  );
}
