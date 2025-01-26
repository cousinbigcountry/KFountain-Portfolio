import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle Fountain Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="" className="nav-item">
            Skills
          </a>
          <a href="" className="nav-item">
            Contact
          </a>
          <div id="logo">
            <a href="">
              <img src="/images/Logo-lt.png" alt="" />
            </a>
          </div>

          <a href="" className="nav-item">
            About
          </a>
          <a href="" className="nav-item">
            Projects
          </a>
        </nav>
        {children}

        <footer>
          <p>footer goes here</p>
        </footer>
      </body>
    </html>
  );
}
