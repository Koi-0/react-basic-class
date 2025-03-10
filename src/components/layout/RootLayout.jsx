import { Outlet } from "react-router";
import ThemeSwitchButton from "../ThemeSwitchButton";
import Toaster from "../Toaster";

// Compositional Layout
const RootLayout = () => {
  return (
    <main className="min-h-screen bg-[#f6f5f8] dark:bg-slate-800">
      <div className="mx-auto max-w-3xl p-4">
        <Outlet />
      </div>

      <ThemeSwitchButton />
      <Toaster />
    </main>
  );
};

export default RootLayout;
