import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./_styles/landingPage.css";
import NavBar from "./_components/_in_resuable/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eBookVerse",
  description: "Where Stories Unfold Digitally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} landing_page`}>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
