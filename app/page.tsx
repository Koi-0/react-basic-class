import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Link href="/detail">DetailPage</Link>
    </div>
  );
};

export default HomePage;
