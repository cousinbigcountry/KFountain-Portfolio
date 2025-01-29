"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <Link href="/" className="nav-logo ">
        <Image src="/images/Logo-lt.png" alt="logo" width={200} height={200} />
      </Link>

      <div className="nav-items hidden lg:block xl:block text-white text-[1.3rem] font-bold no-underline uppercase">
        <ul>
          <li>
            <Link href={"/skills"} className="hover:text-[#7791d6]">
              Skills
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="hover:text-[#7791d6]">
              Contact
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="hover:text-[#7791d6]">
              About
            </Link>
          </li>
          <li>
            <Link href={"/projects"} className="hover:text-[#7791d6]">
              Projects
            </Link>
          </li>
        </ul>
      </div>

      <Image
        src="/images/menu.png"
        alt="menu"
        width={50}
        height={50}
        className="menu ml-4 cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <div
        className={`mobile-menu absolute lg:hidden top-24 left-0 w-full flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "transform 0.3 ease, opacity 0.3 ease" }}
      >
        <li className="list-none w-full text-center p-4 hover:text-[#7791d6] transition-all cursor-pointer">
          <a href="/skills">Skills</a>
        </li>
        <li className="list-none w-full text-center p-4 hover:text-[#7791d6] transition-all cursor-pointer">
          <a href="/contact">Contact</a>
        </li>
        <li className="list-none w-full text-center p-4 hover:text-[#7791d6] transition-all cursor-pointer">
          <a href="/about">About</a>
        </li>
        <li className="list-none w-full text-center p-4  hover:text-[#7791d6] transition-all cursor-pointer">
          <a href="/projects">Projects</a>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
