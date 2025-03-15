import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";

const HomePage = () => {
  return (
    <section>
      <div className="container mx-auto p-2">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
