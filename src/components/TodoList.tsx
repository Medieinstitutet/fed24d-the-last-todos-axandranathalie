import { Task } from "./Task";
import type { Todo } from "../types/todo";

type TodoListProps = {
  todos: Todo[];
  onToggleDone: (id: number) => void;
};

export const TodoList = ({ todos, onToggleDone }: TodoListProps) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} onToggle={onToggleDone} />
      ))}
    </ul>
  );
};
