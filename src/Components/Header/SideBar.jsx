"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { FiArrowUpRight } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import SocialLinks from "../Ui/SocialLinks";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/project" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);
  const openSidebar = () => setIsOpen(true);

  const CloseButton = (
    <button
      onClick={closeSidebar}
      className="w-16 h-16 bg-accent-orange flex items-center justify-center text-text-light-white text-3xl font-light cursor-pointer transition-colors"
      aria-label="Close Menu"
    >
      <RxCross2 />
    </button>
  );

  const OpenButton = (
    <button
      onClick={openSidebar}
      className="absolute top-0 right-0 z-1 w-20 h-18.5 bg-black flex flex-col items-center justify-center text-text-light-white text-2xl font-light hover:bg-gray-900 transition-colors cursor-pointer"
      style={{ border: "none" }}
      aria-label="Open Menu"
    >
      <HiMenuAlt4 />
    </button>
  );

  const navLinks = (
    <ul className="space-y-1">
      {menuItems.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            onClick={closeSidebar}
            className="group flex font-heading justify-between items-center py-3 text-sm font-medium text-text-light-white border-b border-gray-800 delay-250 hover:text-accent-orange transition-colors duration-400 ease-in-out"
          >
            <span>{item.name}</span>
            <FiArrowUpRight size={24} className="text-base group-hover:animate-arrow-cycle" />
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {!isOpen && OpenButton}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-70 z-40"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <div
        className={`w-full max-w-sm h-screen bg-black top-0 right-0 fixed z-50 flex flex-col transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center h-16 border-b border-gray-800">
          <div className="text-text-light-white ml-6">
            <Image src="/offcanvas-logo.png" alt="Logo" width={90} height={35} />
          </div>
          {CloseButton}
        </div>

        <div className="p-6 overflow-y-auto grow">
          {navLinks}
        </div>

        <div className="border-t border-gray-800 p-6">
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

export default SideBar;
