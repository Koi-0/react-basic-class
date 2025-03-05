import { Outlet } from "react-router";

// Compositional Layout
const RootLayout = () => {
  return (
    <main className="min-h-screen bg-[#f6f5f8]">
      <div className="mx-auto max-w-3xl p-4">
        <Outlet />
      </div>
    </main>
  );
};

export default RootLayout;
