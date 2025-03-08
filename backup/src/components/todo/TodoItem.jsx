import { Link, useNavigate } from "react-router";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "../../hooks/useTodoQuery";

const TodoItem = ({ completed, text, id }) => {
  const navigate = useNavigate();

  const { mutate: toggleTodoMutate } = useToggleTodoMutation();
  const { mutate: deleteTodoMutate } = useDeleteTodoMutation();

  const navigateAfterDelete = (id) => {
    deleteTodoMutate(id);

    navigate("/");
  };

  return (
    <li className="flex flex-row flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-md">
      <Link
        to={`/todos/${id}`}
        className={`hover:underline ${completed ? "line-through" : ""}`}
      >
        {text}
      </Link>

      <div className="flex flex-row flex-wrap gap-2">
        <button
          onClick={() => toggleTodoMutate({ id, completed })}
          className={`${
            completed ? "bg-[#242424]" : "bg-[#582be6]"
          } whitespace-nowrap rounded-lg px-4 py-2 text-center text-white hover:opacity-80`}
        >
          {completed ? "취소하기" : "완료하기"}
        </button>

        <button
          onClick={() => navigateAfterDelete(id)}
          className="whitespace-nowrap rounded-lg bg-[#ff4033] px-4 py-2 text-center text-white hover:opacity-80"
        >
          삭제하기
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
