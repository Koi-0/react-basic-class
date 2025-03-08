import { FileCheck, LaptopMinimal, Video } from "lucide-react";
import { Link } from "react-router";
import { useFilterParams } from "../../hooks/useFilterParams";
import { useTodoQuery } from "../../hooks/useTodoQuery";

const TodoDashboard = () => {
  const selectedFilter = useFilterParams();

  const { data: all } = useTodoQuery();
  const { data: completed } = useTodoQuery("completed");
  const { data: pending } = useTodoQuery("pending");

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Quick Access</h2>
      <ul className="flex flex-row flex-wrap gap-4">
        <li className="flex-[2]">
          <Link
            to="/"
            className={`flex h-[184px] w-full cursor-pointer flex-col justify-between rounded-2xl bg-[#e6582b] p-5 text-white ${
              !selectedFilter && "underline"
            }`}
          >
            <div>
              <FileCheck />
            </div>
            <p className="text-xl font-semibold">
              {all?.length} <br /> <span>All Tasks</span>
            </p>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="?filter=completed"
            className={`flex h-[184px] w-full cursor-pointer flex-col justify-between rounded-2xl bg-[#582be6] p-5 text-white ${
              selectedFilter === "completed" && "underline"
            }`}
          >
            <div>
              <LaptopMinimal />
            </div>
            <p className="text-xl font-semibold">
              {completed?.length} <br /> <span>Completed Tasks</span>
            </p>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="?filter=pending"
            className={`flex h-[184px] w-full cursor-pointer flex-col justify-between rounded-2xl bg-[#242424] p-5 text-white ${
              selectedFilter === "pending" && "underline"
            }`}
          >
            <div>
              <Video />
            </div>
            <p className="text-xl font-semibold">
              {pending?.length} <br /> <span>Pending Tasks</span>
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TodoDashboard;
