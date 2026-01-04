"use client";

import { DarkMode, LightMode } from "@mui/icons-material";
import * as React from "react";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  const root = document.documentElement; // <html>
  root.classList.toggle("dark", theme === "dark");
}

function getStoredTheme(): Theme | null {
  const v = localStorage.getItem("theme");
  return v === "dark" || v === "light" ? v : null;
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>("light");

  // On mount: read stored theme and apply it
  React.useEffect(() => {
    const stored = getStoredTheme();
    const initial: Theme = stored ?? "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button type="button" onClick={toggle}>
      {theme === "light" ? <DarkMode /> : <LightMode/>}
    </button>
  );
}
