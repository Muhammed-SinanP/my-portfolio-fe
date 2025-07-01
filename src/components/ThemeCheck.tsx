"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { setTheme } from "@/redux/features/themeSlice";

const ThemeCheck = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    dispatch(setTheme(storedTheme || "light"));
    document.documentElement.setAttribute("data-theme", storedTheme || "light");
  }, []);

  return null;
};

export default ThemeCheck;
