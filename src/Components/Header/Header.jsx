import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import SideBar from "./SideBar";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-center items-center h-20 z-50">
      <div className="flex max-w-8xl w-[95%] justify-between items-center border-b-1 border-foreground text-center py-4 relative">
       <Link href="/"> <Image
          src="/logo.png"
          alt="Perez Logo"
          width={100}
          height={35}
          priority
        /></Link>

        <div className="flex items-center space-x-4">
          <nav className="pr-10">
            <Link
              href="/contact"
              className="group text-primary-foreground font-sans px-6 py-2 flex items-center text-[16px] font-extrabold gap-2 delay-200 md:hover:text-text-light-white transition-colors duration-400 ease-in-out"
            >
              <span>Let&apos;s Talk</span>
              <span className="mr-2 flex items-center transition-transform duration-300 ease-in-out">
                <MdOutlineArrowOutward size={23} className="group-hover:animate-arrow-cycle" />
              </span>
            </Link>
          </nav>
        </div>
      </div>
      <SideBar />
    </header>
  );
};

export default Header;
