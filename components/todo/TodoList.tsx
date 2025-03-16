"use client";

import { Todo } from "@/types/todo.type";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/todos", {
        next: {
          tags: ["todos"],
        },
      });

      const data: Todo[] = await response.json();

      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
