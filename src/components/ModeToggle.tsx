import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <motion.span
        key={isDark ? "sun" : "moon"}
        initial={{ opacity: 0, rotate: -18, scale: 0.8 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </motion.span>
    </button>
  );
};

export default ModeToggle;
