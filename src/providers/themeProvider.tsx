"use client";
import { useSidebarStore, useThemeStore } from "@/store";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { theme, setTheme } = useThemeStore((state) => state);
  const { setSideBarOpen } = useSidebarStore((state) => state);

  const changeTheme = (theme: "dark" | "light") => {
    const html = document.querySelector("html");
    localStorage.setItem("theme", theme);
    setTheme(theme);
    html?.classList.remove("dark", "light");
    html?.classList.add(theme);
  };

  const setSideBar = () => {
    const openSideBar = localStorage.getItem("sideBarOpen")
      ? localStorage.getItem("sideBarOpen") === "true"
      : true;
    setSideBarOpen(openSideBar);
  };

  useEffect(() => {
    setSideBar();
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) {
      const OSDarkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      OSDarkTheme ? changeTheme("dark") : changeTheme("light");
    } else {
      changeTheme(localTheme as "dark" | "light");
    }
  }, []);

  if (!theme) return null;
  return <>{children}</>;
};

export default ThemeProvider;
