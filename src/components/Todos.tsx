import { useState, useEffect } from "react";
import { TodoList } from "./TodoList";
import { Form } from "./Form";
import type { Todo } from "../types/todo";

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(
      localStorage.getItem("todos") ||
        JSON.stringify([
          { id: 1, text: "Eat breakfast", done: false },
          { id: 2, text: "Brush teeth", done: false },
          { id: 3, text: "Drop kids off at school", done: false },
          { id: 4, text: "Study", done: false },
          { id: 5, text: "Eat a snack", done: false },
          { id: 6, text: "Work out", done: false },
          { id: 7, text: "Pick kids up from school", done: false },
          { id: 8, text: "Eat dinner", done: false },
          { id: 9, text: "Put kids to bed", done: false },
          { id: 10, text: "Relax", done: false },
          { id: 11, text: "Sleep", done: false },
        ])
    )
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const toggleDone = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };
const [sortAsc, setSortAsc] = useState(true);

const incompleteTodos = todos
  .filter((todo) => !todo.done)
  .sort((a, b) =>
    sortAsc
      ? a.text.localeCompare(b.text, 'en')
      : b.text.localeCompare(a.text, 'en')
  );

const completedTodos = todos
  .filter((todo) => todo.done)
  .sort((a, b) =>
    sortAsc
      ? a.text.localeCompare(b.text, 'en')
      : b.text.localeCompare(a.text, 'en')
  );

return (
  <div>
    <h1>Todo of today</h1>

    <button onClick={() => setSortAsc((prev) => !prev)}>
      Sort: {sortAsc ? "Z–A" : "A–Z"}
    </button>

    <Form onAddTodo={addTodo} />

    <h2>📝 Let’s go and have fun!</h2>
    <TodoList todos={incompleteTodos} onToggleDone={toggleDone} />

    <h2>🎉 You’re awesome, look what you’ve done!</h2>
    <TodoList todos={completedTodos} onToggleDone={toggleDone} />
  </div>
);
}