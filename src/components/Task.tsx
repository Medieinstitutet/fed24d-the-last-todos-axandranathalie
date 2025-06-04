import type { Todo } from "../types/todo";

type TaskProps = {
  todo: Todo;
  onToggle: (id: number) => void;
};

export const Task = ({ todo, onToggle }: TaskProps) => {
  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
<button onClick={() => onToggle(todo.id)}>
  {todo.done ? "Undo" : "Done"}
</button>

    </li>
  );
};
