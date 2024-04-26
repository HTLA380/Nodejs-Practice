"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  if (resolvedTheme === "dark") {
    return (
      <Button
        onClick={() => setTheme("light")}
        variant={"ghost"}
        size={"icon"}
        className="rounded-full"
      >
        <Sun size={20} />
      </Button>
    );
  }

  return (
    <Button
      onClick={() => setTheme("dark")}
      variant={"ghost"}
      size={"icon"}
      className="rounded-full"
    >
      <Moon size={15} />
    </Button>
  );
};

export default ThemeToggler;
