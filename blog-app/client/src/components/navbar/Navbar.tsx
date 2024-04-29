import React from "react";
import ThemeToggler from "../theme-toggler/ThemeToggler";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex w-full items-center px-5 py-7">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between py-2 ">
        <Link href={"/"} className="text-xl font-semibold">
          BuddhaWisdom
        </Link>
        <ul className="hidden items-center gap-7 sm:flex">
          {["blogs", "projects", "about", "newsletter"].map((navlink) => (
            <li key={navlink}>
              <Link
                href={`/${navlink}`}
                className="text-sm capitalize hover:underline"
              >
                {navlink}
              </Link>
            </li>
          ))}
          <ThemeToggler />
        </ul>

        <MobileDrawer />
      </nav>
    </header>
  );
};

export default Navbar;
