"use client";
import { PostRelatedStore } from "@/app/posts/postStore";
import React, { useEffect } from "react";

const ThemeGetter: React.FC = () => {
  useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return null;
};
export default ThemeGetter;
