interface TodoProps {
  text: string;
  isDone: boolean;
  id: number;
  toggleCallback: (id: number) => void;
}

export default function Todo({ text, isDone, id, toggleCallback }: TodoProps) {
  function toggleOnclick() {
    toggleCallback(id);
  }

  return (
    <div>
      <div onClick={() => toggleOnclick()}>
        {isDone ? "DONE" : "TODO"} - {text}
      </div>
    </div>
  );
}
