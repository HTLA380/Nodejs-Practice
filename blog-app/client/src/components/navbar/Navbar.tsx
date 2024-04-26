import React from "react";
import ThemeToggler from "../theme-toggler/ThemeToggler";

const Navbar = () => {
  return (
    <header className="w-full flex items-center py-7 px-5">
      <nav className="mx-auto flex items-center justify-between py-2 w-full max-w-6xl ">
        <h3>BuddhaWisdom</h3>
        <ul className="flex items-center gap-7">
          {["blog", "projects", "about", "newsletter"].map((navlink) => (
            <li key={navlink}>
              <a
                href={`#${navlink}`}
                className="hover:underline text-sm capitalize"
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
