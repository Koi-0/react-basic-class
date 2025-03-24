import { getTodoItem, getTodos } from "@/api/todo-api";
import { FilterType } from "@/store/useTodoFilterStore";
import { Todo } from "@/types/todo.type";
import { createClient } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useTodosQuery = (filter: FilterType) => {
  const SupabaseClient = createClient();

  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(SupabaseClient, filter),
  });
};

export const useTodoItemQuery = (id: Todo["id"]) => {
  const SupabaseClient = createClient();

  return useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodoItem(SupabaseClient, id),
  });
};
