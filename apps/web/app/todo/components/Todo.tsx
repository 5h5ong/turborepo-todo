import { useSWRConfig } from "swr";

interface TodoProps {
  text: string;
  isDone: boolean;
  id: number;
  toggleCallback: (id: number) => void;
}

export default function Todo({ text, isDone, id, toggleCallback }: TodoProps) {
  const { mutate } = useSWRConfig();

  function toggleOnclick() {
    toggleCallback(id);
    mutate("http://localhost:4000/todos");
  }

  return (
    <div>
      <div onClick={() => toggleOnclick()}>
        {isDone ? "DONE" : "TODO"} - {text}
      </div>
    </div>
  );
}
