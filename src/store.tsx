import { create } from "zustand";

interface ThemStore {
  theme: "dark" | "light" | null;
  setTheme: (theme: "dark" | "light") => void;
}

interface SidebarStore {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const useThemeStore = create<ThemStore>((set) => ({
  theme: null,
  setTheme: (theme) =>
    set(() => {
      const html = document.querySelector("html");
      localStorage.setItem("theme", theme);
      html?.classList.remove("dark", "light");
      html?.classList.add(theme);
      return { theme };
    }),
}));

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: true,
  toggleSidebar: () =>
    set((state) => {
      return { isOpen: !state.isOpen };
    }),
}));
