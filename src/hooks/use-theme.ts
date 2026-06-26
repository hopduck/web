"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useCallback, useMemo } from "react";

/**
 * App-level theme hook wrapping `next-themes`.
 * @returns `theme` — the raw stored value (`"light"` | `"dark"` | `"system"`)
 * @returns `resolvedTheme` — the actual resolved value, never `"system"`
 * @returns `isDark` / `isLight` — convenience booleans based on `resolvedTheme`
 * @returns `toggleTheme` — toggles between light and dark
 * @returns `setTheme` — set theme explicitly
 */
export const useAppTheme = () => {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const isDark = resolvedTheme === "dark";
  const isLight = resolvedTheme === "light";

  const toggleTheme = useCallback(() => {
    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  return useMemo(
    () => ({
      isDark,
      isLight,
      resolvedTheme,
      setTheme,
      theme,
      toggleTheme,
    }),
    [theme, resolvedTheme, setTheme, isDark, isLight, toggleTheme]
  );
};
