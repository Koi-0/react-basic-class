import { getTodos } from "@/api/todo-api";
import Link from "next/link";

const HomePage = async () => {
  const todos = await getTodos();

  return (
    <div>
      HomePage
      <Link href="/detail">DetailPage</Link>
      <ul>
        {todos.map(({ id, text, completed }) => {
          return (
            <li key={id}>
              {text} {completed ? "(completed)" : "(pending)"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
