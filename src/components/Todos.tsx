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
  <div className="min-h-screen bg-gray-100 p-4 text-gray-900">
    <h1 className="text-3xl font-bold text-center mb-6">Let's crush today’s tasks! 💪</h1>

    <div className="mb-6 text-center">
      <button
        onClick={() => setSortAsc((prev) => !prev)}
        className="px-4 py-2 bg-blue-950 text-white rounded hover:bg-blue-800 transition"
      >
        Sort: {sortAsc ? "Z–A" : "A–Z"}
      </button>
    </div>

    <Form onAddTodo={addTodo} />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">📝 Let’s go and have fun!</h2>
        <TodoList todos={incompleteTodos} onToggleDone={toggleDone} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">🎉 You’re awesome, look what you’ve done!</h2>
        <TodoList todos={completedTodos} onToggleDone={toggleDone} />
      </div>
    </div>
  </div>
);
}