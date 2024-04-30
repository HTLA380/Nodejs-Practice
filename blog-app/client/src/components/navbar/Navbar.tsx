import React from "react";
import ThemeToggler from "../theme-toggler/ThemeToggler";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="z-40 flex w-full items-center p-5">
      <nav className="mx-auto flex w-full max-w-80 items-center justify-between py-2 sm:max-w-2xl lg:max-w-6xl ">
        <Link href={"/"} className="text-xl font-semibold">
          BuddhaWisdom
        </Link>
        <ul className="hidden items-center gap-7 sm:flex">
          <Link href={"/blogs"}>Blogs</Link>
          <ThemeToggler />
        </ul>
        <MobileDrawer />
      </nav>
    </header>
  );
};

export default Navbar;
