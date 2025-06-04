import type { Todo } from "../types/todo";

type TaskProps = {
  todo: Todo;
  onToggle: (id: number) => void;
};

export const Task = ({ todo, onToggle }: TaskProps) => {
  return (
    <li className="flex items-center justify-between bg-white border rounded px-4 py-2 shadow-sm mb-2">
      <span
        className={`flex-1 text-left ${
          todo.done ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => onToggle(todo.id)}
        className="ml-4 px-3 py-1 rounded text-sm text-gray-700 hover:bg-gray-200 transition"
      >
        {todo.done ? "↩️" : "✅"}
      </button>
    </li>
  );
};
