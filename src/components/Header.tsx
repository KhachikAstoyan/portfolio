import React from "react";
import { Container } from "./common/Container";

const MenuItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <li className="text-neutral-400 font-normal border-b-2 border-transparent transition-colors hover:border-indigo-600 hover:text-indigo-500 md:text-lg">
      {children}
    </li>
  );
};

export const Header = () => {
  return (
    <header className="z-50 fixed w-full flex dark:bg-neutral-950 border-stone-900 border-b z-10 bg-opacity-70 backdrop-blur-md justify-between py-5 px-5 md:px-12 ">
      <h1 className="font-bold text-md md:text-xl">Khachik Astoyan</h1>
      <nav className="flex items-center">
        <ul className="flex justify-around gap-3">
          <MenuItem>
            <a href="#about">About</a>
          </MenuItem>
          <MenuItem>
            <a href="#experience">Experience</a>
          </MenuItem>
          <MenuItem>
            <a href="#projects">Projects</a>
          </MenuItem>
          <MenuItem>
            <a href="#contact">Contact</a>
          </MenuItem>
        </ul>
      </nav>
    </header>
  );
};
