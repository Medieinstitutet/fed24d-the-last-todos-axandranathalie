import { useState } from "react";
import type { Todo } from "../types/todo";

type Props = {
  onAddTodo: (todo: Todo) => void;
};

export const Form = ({ onAddTodo }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: text.trim(),
      done: false,
    };

    onAddTodo(newTodo);
    setText("");
  };

  return (
<form
  onSubmit={handleSubmit}
  className="flex justify-center items-center gap-3 mt-6"
>
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="New task"
    aria-label="Add new todo"
    className="w-72 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button
    type="submit"
    className="px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-800 transition"
  >
    Add
  </button>
</form>

  );
};
