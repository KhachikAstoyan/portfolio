"use client";
import React, { useCallback } from "react";
import { Container } from "./common/Container";
import data from "../data";
import clsx from "clsx";
import { cn } from "../lib/utils";

type MenuItemProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
const MenuItem: React.FC<MenuItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li className="text-neutral-400 text-2xl flex items-center gap-1 font-normal border-b-2 border-transparent transition-colors hover:border-indigo-600 hover:text-indigo-400 md:text-lg">
      <a {...props} className={cn("flex items-center gap-2", className)}>
        {children}
      </a>
    </li>
  );
};

const ExternalLinkIcon: React.FC<React.SVGAttributes<HTMLOrSVGElement>> = (
  props
) => {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Interface / External_Link">
        <path
          id="Vector"
          d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

const HamburgerLine: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "w-full bg-neutral-300 transition rounded relative h-[2px]",
        className
      )}
      {...props}
    ></div>
  );
};

type HamburgerIconProps = React.HTMLAttributes<HTMLButtonElement> & {
  open: boolean;
};

const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  className,
  open,
  ...props
}) => {
  return (
    <button
      className={`flex flex-col gap-2 w-8 h-8 items-end justify-center ${className}`}
      {...props}
    >
      <HamburgerLine
        className={clsx({
          "rotate-45 translate-y-[8px]": open,
        })}
      />
      <HamburgerLine
        className={clsx("w-2/3", {
          "opacity-0": open,
        })}
      />
      <HamburgerLine
        className={clsx({
          "-rotate-45 translate-y-[-11px]": open,
        })}
      />
    </button>
  );
};

const navDesktopClasses =
  "md:static md:w-auto md:h-auto md:translate-x-0 md:opacity-100 md:justify-start md:transform-none";
const navMobileClasses =
  "absolute duration-200 top-0 left-0 w-full bg-neutral-950 translate-x-full opacity-0 h-screen flex-col justify-center items-center";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = useCallback(
    () => setIsMobileMenuOpen(false),
    [setIsMobileMenuOpen]
  );

  return (
    <header className="z-50 fixed w-full flex dark:bg-neutral-950 border-stone-900 border-b bg-opacity-70 backdrop-blur-md justify-between py-5 px-5 md:px-12 ">
      <h1 className="font-bold text-md md:text-xl">Khachik Astoyan</h1>
      <HamburgerIcon
        open={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden z-[70]"
      />
      <nav
        className={clsx(
          "flex items-center transition",
          navDesktopClasses,
          navMobileClasses
        )}
        style={
          isMobileMenuOpen ? { transform: "translateX(0)", opacity: 1 } : {}
        }
      >
        <ul className="flex justify-around gap-3 flex-col md:flex-row items-center">
          <MenuItem onClick={closeMobileMenu} href="#about">
            About
          </MenuItem>
          <MenuItem onClick={closeMobileMenu} href="#experience">
            Experience
          </MenuItem>
          <MenuItem onClick={closeMobileMenu} href="#projects">
            Projects
          </MenuItem>
          <MenuItem onClick={closeMobileMenu} href="#contact">
            Contact
          </MenuItem>
          <MenuItem
            onClick={closeMobileMenu}
            href={data.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLinkIcon className="h-5 text-indigo-300" />
            Github
          </MenuItem>
          <MenuItem
            onClick={closeMobileMenu}
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLinkIcon className="h-5 text-indigo-300" />
            CV
          </MenuItem>
        </ul>
      </nav>
    </header>
  );
};
