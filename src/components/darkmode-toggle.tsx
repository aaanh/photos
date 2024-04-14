"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

import { useEffect, useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme") === "dark") {
        setTheme("dark");
        setChecked(true);
      } else if (localStorage.getItem("theme") === "light") {
        setTheme("light");
        setChecked(false);
      }
    }
  }, []);

  function handleModeToggle(isDark: boolean) {
    if (isDark) {
      setTheme("dark");
      setChecked(true);
    } else {
      setTheme("light");
      setChecked(false);
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        onCheckedChange={(isDark: boolean) => {
          handleModeToggle(isDark);
        }}
        checked={
          typeof window !== "undefined"
            ? localStorage.getItem("theme") === "dark"
              ? true
              : false
            : false
        }
        name="dark-mode"
        id="dark-mode"
      ></Switch>
      <Label htmlFor="dark-mode">Dark Mode</Label>
    </div>
  );
}
