import { getTodos } from "@/api/todo-api";
import TodoFilterSwitch from "@/components/todo/TodoFilterSwitch";
import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos", "all"],
    queryFn: () => getTodos(),
  });

  await queryClient.prefetchQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos("completed"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container mx-auto space-y-8 p-2">
          <TodoForm />
          <div className="flex flex-row justify-end">
            <TodoFilterSwitch />
          </div>
          <TodoList />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default HomePage;
