"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

const TodoForm = () => {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoText = formData.get("todo-text") as string;

    await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ text: todoText }),
    });

    form.reset();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center space-x-2 rounded-md bg-gray-200 p-3"
    >
      <Input
        type="text"
        name="todo-text"
        required
        placeholder="할 일을 입력하세요."
        className="bg-white"
      />
      <Button type="submit">추가하기</Button>
    </form>
  );
};

export default TodoForm;
