"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="w-[100px] h-9 bg-violet-800 rounded-full relative transition-all duration-300"
    >
      <div className="absolute inset-0 flex justify-between items-center px-[9px] z-10">
        <Moon
          size={18}
          className={cn(
            "transition-opacity duration-300",
            isDark ? "text-black" : "text-white"
          )}
        />
        <Sun
          size={18}
          className={cn(
            "transition-opacity duration-300",
            isDark ? "text-white" : "text-black"
          )}
        />
      </div>
      <span
        className={cn(
          "absolute top-[4px] left-[4px] w-7 h-7 rounded-full border border-white transition-transform duration-300 z-0 bg-white",
          isDark ? "translate-x-0" : "translate-x-16"
        )}
      />
    </button>
  );
}
