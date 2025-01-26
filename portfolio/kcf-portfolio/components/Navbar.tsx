"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <Link href="/" className="nav-logo ">
        <Image src="/images/Logo-lt.png" alt="logo" width={300} height={300} />
      </Link>

      <div className="nav-items hidden lg:block">
        <ul>
          <li>
            <Link href={"/"}>Skills</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Projects</Link>
          </li>
        </ul>
      </div>

      <Image
        src="/images/menu.png"
        alt="menu"
        width={50}
        height={50}
        className="menu cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <div
        className={`mobile-menu absolute lg:hidden top-24 left-0 w-full flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3 ease, opacity 0.3 ease" }}
      >
        <li className="list-none w-full text-center p-4 hover:text-red-600 transition-all cursor-pointer">
          Skills
        </li>
        <li className="list-none w-full text-center p-4 hover:text-red-600 transition-all cursor-pointer">
          Contact
        </li>
        <li className="list-none w-full text-center p-4 hover:text-red-600 transition-all cursor-pointer">
          About
        </li>
        <li className="list-none w-full text-center p-4  hover:text-red-600 transition-all cursor-pointer">
          Projects
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
