import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LogoutLink from "@/components/auth/Logout";
import LoginLogout from "@/components/auth/loginLogout";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Bay",
  description:
    "NextBay is the storefront for the DarkBay marketplace, complementing a Nest js backend ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-mono",
        jetbrainsMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <header>
          <div className="flex justify-between p-10 ml:p-20 ">
            <h1>Next Bay</h1>
            <LoginLogout />
          </div>
        </header>
        <main className="flex px-10 ml:px-20 ">{children}</main>
      </body>
    </html>
  );
}
