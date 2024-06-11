"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showNavbarMobile, setShowNavbarMobile] = useState(false);

  const handleNavbarMobile = () => {
    setShowNavbarMobile(!showNavbarMobile);
  };

  return (
    <header className="flex w-full items-center justify-between p-4 lg:px-6">
      <Link href="/" className="flex flex-1 items-center gap-1">
        <Image
          src="/logo.webp"
          alt="logo-company"
          loading="lazy"
          width={50}
          height={50}
          className="aspect-square h-14 w-1h-14 object-contain"
        />
      </Link>

      <nav className="hidden flex-1 items-center justify-center gap-8 md:flex">
        <Link href="/" className="font-semibold text-mainColor hover:underline">
          Home
        </Link>
        <Link
          href="/about"
          className="font-semibold text-mainColor hover:underline">
          About
        </Link>
        <Link
          href="/cars"
          className="font-semibold text-mainColor hover:underline">
          Cars
        </Link>
        <Link
          href="/teams"
          className="font-semibold text-mainColor hover:underline">
          Teams
        </Link>
      </nav>

      <div className="mr-4 flex flex-1 items-center justify-end gap-4 md:mr-0 md:gap-8">
        <Link
          href="/login"
          className="flex items-center justify-center gap-4 border border-mainColor bg-mainColor px-4 py-1 font-semibold text-white transition hover:bg-white hover:text-mainColor md:px-6 md:py-2">
          Login
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <div className="block cursor-pointer md:hidden">
          <Menu
            size={30}
            color="#f47920"
            className={showNavbarMobile ? "hidden" : "block"}
            onClick={handleNavbarMobile}
          />
          <X
            size={30}
            color="#f47920"
            className={showNavbarMobile ? "block" : "hidden"}
            onClick={handleNavbarMobile}
          />
        </div>
      </div>

      {/* NAVBAR MOBILE START */}
      <section
        className={`border-orange fixed ${
          showNavbarMobile ? "left-0" : "left-[-200%]"
        } top-0 z-50 h-[100vh] w-[60%] border-r bg-white p-4 shadow-md transition-all duration-300 ease-linear`}>
        <Link href="/" className="flex flex-1 items-center gap-1">
          <Image
            src="/logo.webp"
            alt="logo-company"
            loading="lazy"
            width={50}
            height={50}
            className="aspect-square h-14 w-1h-14 object-contain"
          />
        </Link>

        <nav className="absolute top-[40%] w-full translate-y-[-40%] p-4">
          <div className="flex flex-col gap-8">
            <Link
              href="/"
              className="font-semibold text-mainColor hover:underline">
              Home
            </Link>
            <Link
              href="/about"
              className="font-semibold text-mainColor hover:underline">
              About
            </Link>
            <Link
              href="/cars"
              className="font-semibold text-mainColor hover:underline">
              Cars
            </Link>
            <Link
              href="/teams"
              className="font-semibold text-mainColor hover:underline">
              Teams
            </Link>
          </div>
        </nav>
      </section>
    </header>
  );
}
