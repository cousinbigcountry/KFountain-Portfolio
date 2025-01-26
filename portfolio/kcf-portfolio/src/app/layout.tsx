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
          <p>Navbar goes here</p>
        </nav>
        {children}

        <footer>
          <p>footer goes here</p>
        </footer>
      </body>
    </html>
  );
}
