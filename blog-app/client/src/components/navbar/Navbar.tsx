import React from "react";
import ThemeToggler from "../theme-toggler/ThemeToggler";

const Navbar = () => {
  return (
    <header className="flex w-full items-center px-5 py-7">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between py-2 ">
        <h3>BuddhaWisdom</h3>
        <ul className="flex items-center gap-7">
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
          <ThemeToggler />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
