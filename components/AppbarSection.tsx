"use client";

import { ModeToggle } from "./my_ui/ModeToggle";
import { UserAuth } from "./UserAuth";
import logo from "../public/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
export const Appbar = () => {
  return (
    <div className="flex items-center border p-4 shadow-md w-full">
      {/* Left Section: Hamburger Menu (mobile), Logo, and Navigation Links */}
      <div className="flex items-center">
        {/* Hamburger Menu (visible only on mobile) */}
        <div className="md:hidden">
          <HamburgerMenu/>
        </div>
        {/* Logo (always visible) */}
        <div className="ml-2">
          <Link href="/dashboard">
            <Image src={logo} alt="logo" width={30} />
          </Link>
        </div>
        {/* Navigation Links (visible only on web, close to logo) */}
        <ul className="hidden md:flex gap-4 ml-4">
          <li>
            <Link href="/book-now">
              <Button variant="link">Book Now</Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button variant="link">About</Button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Section: UserAuth and ModeToggle (visible only on web, pushed to right) */}
      <div className="flex md:pr-24 gap-4 ml-auto">
        <UserAuth />
        <ModeToggle />
      </div>
    </div>
  );
};