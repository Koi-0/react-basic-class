import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { getTodoItem } from "../api/todo-api";
import TodoItem from "../components/todo/TodoItem";

const TodoDetailPage = () => {
  const { id } = useParams();

  const {
    data: todoItem,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching todos - {error.message}</div>;
  }

  return (
    <section className="flex flex-col gap-4">
      {todoItem ? (
        <TodoItem
          id={todoItem.id}
          text={todoItem.text}
          completed={todoItem.completed}
        />
      ) : (
        <p>해당하는 데이터를 찾을 수 없습니다.</p>
      )}

      <Link to="/" className="flex-1">
        <button className="w-full rounded-lg bg-[#242424] px-4 py-2 text-center text-white">
          돌아가기
        </button>
      </Link>
    </section>
  );
};

export default TodoDetailPage;
