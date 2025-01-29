import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container w-full clear-both h-[100px] mt-[250px]">
        <div className="flex justify-between">
          {/* -----------------SITEMAP-----------------------*/}
          <ul className="sitemap flex space-x-5">
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

          {/* -----------------FOOTER LOGO-----------------------*/}
          <Link href="/" className="footer-logo ">
            <Image
              src="/images/KF-Long.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          {/* -----------------EXTERNAL LINKS-----------------------*/}
          <ul className="externals">
            <li>
              <Link href={"/skills"} className="hover:text-[#7791d6]">
                {" "}
                <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
