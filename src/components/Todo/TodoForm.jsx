import { useEffect, useRef, useState } from "react";
import { useAddTodoMutation } from "../../hooks/useTodoQuery";

const TodoForm = () => {
  const { mutate: addTodoMutate } = useAddTodoMutation();

  const [todoText, setTodoText] = useState("");

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodoMutate(todoText);

    setTodoText("");
  };

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-4">
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
        ref={inputRef}
        className="flex-[8] rounded-lg border border-gray-300 bg-white p-2 text-base placeholder-gray-400 focus:border-[#582be6] focus:outline-none"
      />
      <button
        type="submit"
        className="hover:bg[#4422b5] flex-1 rounded-lg bg-[#582be6] px-4 py-2 text-center text-white transition-colors"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
