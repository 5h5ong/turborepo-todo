interface TodoProps {
  text: string;
  isDone: boolean;
}

export default function Todo({ text, isDone }: TodoProps) {
  return (
    <div>
      <div>
        {isDone ? "DONE" : "TODO"} - {text}
      </div>
    </div>
  );
}
