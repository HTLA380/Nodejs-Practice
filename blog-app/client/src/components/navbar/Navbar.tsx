import React from "react";
import ThemeToggler from "../theme-toggler/ThemeToggler";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";
import { cookies } from "next/headers";
import { getUserInfo } from "@/services/authService";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = async () => {
  const token = cookies().get("token");

  const user = token ? await getUserInfo(token.value) : null;

  return (
    <header className="z-40 flex w-full items-center p-5">
      <nav className="mx-auto flex w-full max-w-80 items-center justify-between py-2 sm:max-w-2xl lg:max-w-6xl ">
        <Link href={"/"} className="text-xl font-semibold">
          BuddhaWisdom
        </Link>
        <ul className="hidden items-center gap-7 sm:flex">
          <ThemeToggler />
          <Link href={"/blogs"}>Blogs</Link>
          {user && (
            <Avatar>
              <AvatarFallback>
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
        </ul>
        <MobileDrawer />
      </nav>
    </header>
  );
};

export default Navbar;
