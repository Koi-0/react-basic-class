"use client";

import { deleteTodo, toggleTodoCompleted } from "@/api/todo-api";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, text, completed } = todo;

  return (
    <article className="flex items-center justify-between rounded-md border p-4">
      <Link
        href={`/${id}`}
        className={cn("hover:underline", { "line-through": completed })}
      >
        <h2>{text}</h2>
      </Link>

      <div className="space-x-2">
        <Button
          onClick={() => {
            toggleTodoCompleted(id, !completed);
          }}
          variant={"outline"}
        >
          {completed ? "취소" : "완료"}
        </Button>
        <Button
          onClick={() => {
            deleteTodo(id);
          }}
          variant={"destructive"}
        >
          삭제
        </Button>
      </div>
    </article>
  );
};

export default TodoItem;
