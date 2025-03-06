import { useToast } from "../hooks/useToast";

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ul className="fixed left-1/2 top-4 z-40 -translate-x-1/2 space-y-2">
      {toasts.map((toast) => (
        <li key={toast.id} className="rounded-md bg-white px-4 py-2 shadow">
          🤚🏻 {toast.message}
        </li>
      ))}
    </ul>
  );
};

export default Toaster;
