import React from "react";
import { useTheme } from "../../../shared/lib/theme/useTheme";

export const ButtonChangeTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "Сменить на тёмную" : "Сменить на светлую"}
    </button>
  );
};
