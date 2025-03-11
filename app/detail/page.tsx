import Link from "next/link";

const DetailPage = async () => {
  const data = await fetch("http://localhost:3000/todos");
  const todo = await data.json();

  return (
    <div>
      DetailPage
      <h1>{todo.title}</h1>
      <Link href="/">HomePage</Link>
    </div>
  );
};

export default DetailPage;
