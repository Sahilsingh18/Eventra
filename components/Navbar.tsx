// Add this line at the very top of your file
"use client"; // This marks the component as a Client Component

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu visibility

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev); // Toggle mobile menu visibility
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <div className="flex item-center">
          <Image src="/hilink-logo2.png" alt="logo" width={80} height={70} className="-ml-2" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link 
            href={link.href} 
            key={link.key} 
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <Image 
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMobileMenu} // Add click handler
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-gray-800 text-gray-50 lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="py-2 text-center">
              <Link href={link.href} className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
