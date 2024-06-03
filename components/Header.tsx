"use client";
import React, { useState } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import AnimatedLogo from "./animations/AnimatedLogo";
import "animate.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed animate__animated w-full bg-[var(--primary-black)] ${
        menuOpen ? "z-50 animate__slideInDown" : "z-10 animate__slideInUp"
      }`}
    >
      <nav className="container flex items-center justify-between border-b border-[#3d3e43] py-4">
        
        <div className={`${menuOpen ? "hidden" : "mr-5"}`}>
          <AnimatedLogo />
        </div>

        <div
          className={`lg:flex w-full justify-between ${
            menuOpen
              ? "flex-col space-y-4 h-full"
              : "hidden space-x-4"
          }`}
        >
          <div
            className={`lg:flex ${
              menuOpen
                ? "flex flex-col space-y-4"
                : "space-x-2"
            }`}
          >
            <Link href="/courses" className="dda py-2 px-4">
              Courses
            </Link>
            <Link href="/about" className="dda py-2 px-4">
              About us
            </Link>
            <Link href="/blog" className="dda py-2 px-4">
              Blog
            </Link>
            <Link href="/contact" className="dda py-2 px-4">
              Contact
            </Link>  
          </div>
          <div className={`flex ${menuOpen ? 'flex-col space-y-2' : 'space-x-4 items-center'}`}>
              <div className="dda flex items-center w-fit py-2 px-4">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
              <Link
                href="/getting-started"
                className="rounded-full border-2 w-fit px-2 py-1 hover:bg-[var(--primary-white)] hover:text-[var(--primary-black)] transition-[0.8s]"
              >
                Get Started
              </Link>
            </div>
        </div>











        <button
          className="flex lg:hidden font-semibold rounded-full border-2 px-4 items-center py-1 hover:bg-[var(--primary-white)] hover:text-[var(--primary-black)] transition-[0.8s]"
          onClick={() => {
            if (menuOpen) {
              setMenuOpen(false);
            } else {
              setMenuOpen(true);
            }
          }}
        >
          <div className={`container2 mr-2 ${menuOpen ? "change" : ""}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          Menu
        </button>
      </nav>
    </header>
  );
}
