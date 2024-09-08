import { useTheme } from "next-themes"

export const ThemeSwitcher = () => {
  const { theme, setTheme,  } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  )
}

