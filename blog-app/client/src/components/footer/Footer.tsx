import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto mt-10 w-full max-w-80 pb-10 sm:max-w-2xl lg:max-w-6xl">
      <ul className="flex flex-wrap items-center gap-3">
        <p>&copy; 2023</p>
        {["Twitter", "LinkedIn", "Email", "RSS feed", "Add to Feedly"].map(
          (list) => {
            return (
              <li key={list}>
                <a href="#" className="hover:underline">
                  {list}
                </a>
              </li>
            );
          },
        )}
      </ul>
    </footer>
  );
};

export default Footer;
