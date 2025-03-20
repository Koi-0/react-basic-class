"use client";

import { cn } from "@/lib/utils";
import { useToggleTodoMutation } from "@/query/useTodoMutations";
import { Todo } from "@/types/todo.type";
import { CheckedState } from "@radix-ui/react-checkbox";
import Link from "next/link";
import { useId } from "react";
import { Checkbox } from "../ui/checkbox";
import TodoDeleteButton from "./TodoDeleteButton";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { mutate: toggleTodoCompleted } = useToggleTodoMutation();
  const { id, text, completed } = todo;
  const checkboxId = useId();

  const onCheckedChange = (checked: CheckedState) => {
    if (checked === "indeterminate") return;

    toggleTodoCompleted({ id, completed: checked });
  };

  return (
    <article className="flex items-center justify-between rounded-md border p-4">
      <div className="flex flex-row items-center gap-4">
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={onCheckedChange}
        />

        <Link
          href={`/${id}`}
          className={cn("hover:underline", { "line-through": completed })}
        >
          <h2>{text}</h2>
        </Link>
      </div>

      <div className="space-x-2">
        <TodoDeleteButton id={id} />
      </div>
    </article>
  );
};

export default TodoItem;
