import { useThemeStore } from "../hooks/useThemeStore";

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useThemeStore();

  const handleclick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="fixed bottom-8 right-8 z-30 rounded-lg bg-white p-3 shadow-md"
      onClick={handleclick}
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeSwitchButton;
