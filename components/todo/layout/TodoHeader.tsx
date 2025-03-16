import Link from "next/link";

const TodoHeader = () => {
  return (
    <header className="mb-4">
      <div className="container mx-auto flex p-2">
        <Link href={"/"}>
          <h1 className="text-4xl font-bold">Todo List</h1>
        </Link>
      </div>
    </header>
  );
};

export default TodoHeader;
