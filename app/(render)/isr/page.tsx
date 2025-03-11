import { Todo } from "@/types/todo.type";

// const ONE_DAY_SECONDS = 60 * 60 * 24;

const ISRPage = async () => {
  const response = await fetch("http://localhost:3000/todos", {
    next: {
      revalidate: 10,
      // revalidate: ONE_DAY_SECONDS,
    },
  });
  const data: Todo[] = await response.json();

  return (
    <div>
      ISRPage({new Date().toLocaleString()}) : {JSON.stringify(data)}
    </div>
  );
};

export default ISRPage;
