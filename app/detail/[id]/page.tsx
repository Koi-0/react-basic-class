interface DetailIdDetailIdPageProps {
  params: Promise<{ id: string }>;
}

const DetailIdDetailIdPage = async ({ params }: DetailIdDetailIdPageProps) => {
  const { id } = await params;

  console.log("params id => ", id);

  return <div>DetailIdDetailIdPage</div>;
};

export default DetailIdDetailIdPage;

// "use client";

// import { useParams } from "next/navigation";

// const DetailIdPage = () => {
//   const params = useParams();

//   console.log("params => ", params);

//   return <div>DetailIdPage</div>;
// };

// export default DetailIdPage;
