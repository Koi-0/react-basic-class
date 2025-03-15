"use client";

import { deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text, completed } = todo;

  return (
    <article>
      <Link href={`/${id}`}>
        <h2>{text}</h2>
      </Link>
      <p>{completed ? "완료" : "미완료"}</p>

      <div>
        <button
          onClick={() => {
            toggleTodoCompleted(id, !completed);
          }}
        >
          {completed ? "취소" : "완료"}
        </button>
        <button
          onClick={() => {
            deleteTodo(id);
          }}
        >
          삭제
        </button>
      </div>
    </article>
  );
};

export default TodoItem;
