import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="grid justify-center mt-[250px]">
      <div className="container w-full h-full clear-both p-4">
        <div className="grid space-y-5 justify-center ">
          {/* -----------------SITEMAP-----------------------*/}
          <ul className="sitemap grid justify-center space-y-5 text-xl font-bold ml-5">
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
              width={200}
              height={100}
            />
          </Link>
          {/* -----------------EXTERNAL LINKS-----------------------*/}
          <ul className="externals grid justify-center space-y-5">
            <li>
              <Link
                href={"https://github.com/cousinbigcountry?tab=repositories"}
                className="hover:text-[#7791d6]"
              >
                {" "}
                <FaGithub size={50} color="white" />
              </Link>
            </li>
            <li>
              <Link
                href={"https://www.linkedin.com/in/kyle-fountain-89a6b4136/"}
                className="hover:text-[#7791d6]"
              >
                {" "}
                <FaLinkedin size={50} color="white" />
              </Link>
            </li>
            <li>
              <Link
                href={"resume.pdf"}
                download={"Kyle Fountain Resume"}
                className="hover:text-[#7791d6]"
              >
                {" "}
                <img
                  src="resume-icon.png"
                  alt="resume"
                  height={60}
                  width={60}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
