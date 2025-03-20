"use client";

import { useTodosQuery } from "@/query/useTodoQuery";
import TodoItem from "./TodoItem";
import { useTodoFilterStore } from "@/store/useTodoFilterStore";

const TodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todos } = useTodosQuery(filter); // 클라이언트 사이드 렌더링

  if (!todos) return <div>Loading...</div>;

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
