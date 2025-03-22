import { create } from "zustand";

const useThemeStore = create((set) => {
  let storedTheme = "light";

  if (typeof window !== "undefined") {
    storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
  }

  return {
    theme: storedTheme,
    setTheme: (newTheme) => {
      document.documentElement.setAttribute("data-theme", newTheme);
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
      set({ theme: newTheme });
    },
  };
});

export default useThemeStore;
