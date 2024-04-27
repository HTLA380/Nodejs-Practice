"use client";

import React from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggler from "../theme-toggler/ThemeToggler";

const MobileDrawer = () => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  if (isSmallScreen)
    return (
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline" size={"icon"}>
            <Menu size={20} />
          </Button>
        </DrawerTrigger>
        <DrawerContent
          showBar={false}
          className="left-auto right-0 top-0 mt-0 h-screen w-1/2 rounded-none"
        >
          <div className="flex items-center justify-between px-5 py-3">
            <ThemeToggler />

            <DrawerClose>
              <Button variant="ghost" size={"icon"} className="rounded-full">
                <X size={20} />
              </Button>
            </DrawerClose>
          </div>

          <div className="mx-auto w-full px-5 py-2">
            <ul className="flex flex-col items-start gap-2 space-y-4 p-4 pb-0 font-medium">
              {["blog", "projects", "about", "newsletter"].map((navlink) => (
                <li key={navlink}>
                  <a
                    href={`#${navlink}`}
                    className="text-sm capitalize hover:underline"
                  >
                    {navlink}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    );
};

export default MobileDrawer;
