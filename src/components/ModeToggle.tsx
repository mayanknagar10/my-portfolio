import { Sun, Moon } from "lucide-react";
import { useTheme }  from "@/components/theme-provider";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <button
      onClick={toggle}
      aria-label="Toggle colour scheme"
      className="relative w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 flex-shrink-0"
      style={{
        border: "1px solid rgba(255,255,255,0.13)",
        color:  "rgba(255,255,255,0.45)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#3b82f6";
        (e.currentTarget as HTMLElement).style.color       = "#3b82f6";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)";
        (e.currentTarget as HTMLElement).style.color       = "rgba(255,255,255,0.45)";
      }}
    >
      {/* Sun — visible in dark mode, click → go light */}
      <Sun
        className="w-[15px] h-[15px] absolute transition-all duration-300"
        style={{
          opacity:   isDark ? 1 : 0,
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0)",
        }}
      />
      {/* Moon — visible in light mode, click → go dark */}
      <Moon
        className="w-[15px] h-[15px] absolute transition-all duration-300"
        style={{
          opacity:   isDark ? 0 : 1,
          transform: isDark ? "rotate(-90deg) scale(0)" : "rotate(0deg) scale(1)",
        }}
      />
    </button>
  );
};

export default ModeToggle;