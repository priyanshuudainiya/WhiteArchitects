import React from "react";
import Logo from "../../assets/Logo & Others/Logo.png";

export default function Header() {
  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-transparent bg-opacity-80 z-50 flex justify-between items-center p-6 px-20"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="text-[#BBBFC0]">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="White Architectures Logo"
              className="h-10 w-auto"
            />
          </div>
        </div>

        <nav className="flex space-x-16 [&>a]:!text-[#A0A2A3]">
          <a href="#" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            News
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Add padding to prevent content from being hidden behind the fixed header */}
      <div className="pt-24"></div>
    </>
  );
}
