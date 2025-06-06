/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f1e4c2]/85 shadow z-50">
      <div className="max-w-8xl mx-auto px-8 py-2 flex justify-between items-center">
        <Link href="/">
          <img src="/Logo.png" alt="RAH Logo" className="h-12 cursor-pointer" />
        </Link>

        <div className="hidden md:flex space-x-16 text-md font-medium text-[#4a301f]">
          <Link href="/about" className="py-2">About</Link>
          <Link href="/gallery" className="py-2">Gallery</Link>
          <Link href="/services" className="py-2">Services</Link>
          <Link href="/testimonials"className="py-2" >Testimonials</Link>
          <button className="bg-[#7e6e61] text-white px-3 py-2 rounded hover:cursor-pointer">
            Order Now
          </button>
        </div>

        <div className="md:hidden">
          <button
            className="hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={24} className="text-[#4a301f]" />
            ) : (
              <Menu size={24} className="text-[#4a301f]" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col text-center text-[#4a301f] space-y-3 px-4 pb-4">
          <Link href="/about">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/services">Services</Link>
          <Link href="/testimonials">Testimonials</Link>
          <button className="bg-[#4a301f] text-white px-3 py-1 rounded hover:cursor-pointer">
            Order Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
