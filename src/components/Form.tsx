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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
        aria-label="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};
