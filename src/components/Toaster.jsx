import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useToast } from "../hooks/useToast";

const Toaster = () => {
  const { toasts } = useToast();
  const [parent] = useAutoAnimate();

  return (
    <ul ref={parent} className="fixed left-4 top-4 z-40 min-w-52 space-y-2">
      {toasts.map((toast) => (
        <li
          key={toast.id}
          className="w-full rounded-md bg-white px-4 py-2 shadow"
        >
          🤚🏻 {toast.message}
        </li>
      ))}
    </ul>
  );
};

export default Toaster;
