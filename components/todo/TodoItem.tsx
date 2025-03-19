"use client";

import { cn } from "@/lib/utils";
import { useToggleTodoMutation } from "@/query/useTodoMutations";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { Button } from "../ui/button";
import TodoDeleteButton from "./TodoDeleteButton";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();

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
            toggleTodoCompleted({ id, completed: !completed });
          }}
          variant={"outline"}
        >
          {completed ? "취소" : "완료"}
        </Button>
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
