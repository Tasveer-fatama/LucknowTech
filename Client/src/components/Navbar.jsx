import React, { useState, useEffect } from "react";
import logowhite from "../assets/logoy.png";
import logoblack from "../assets/logoblack.png";
import ModelFormPopup from "./ModelFormPopup";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FFC802]">
         <Link to="/">
          <img
            src={isScrolled ? logowhite : logowhite}
            alt="Logo"
            className="h-24"
          />
         </Link>

        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-2 text-base font-extrabold">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "Projects", href: "/projects" },
            { name: "About Us", href: "/about" },
            { name: "Career", href: "/career" },
          ].map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`py-2 px-4 rounded-full ${
                activeLink === link.href
                  ? "bg-[#FFC802] text-white"
                  : "text-white hover:text-[#FFC802]"
              }`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <button
          className={`hidden md:block py-2 px-4 rounded-full ${
            activeLink === "/contact"
              ? "bg-[#FFC802] text-white"
              : "bg-gray-200 hover:bg-[#FFC802] text-gray-700"
          }`}
          onClick={() => setIsModalOpen(true)}
        >
          Contact Us
        </button>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none z-[200]"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-zinc-950 text-white flex flex-col items-center justify-center space-y-4 z-[150] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Projects", href: "/projects" },
          { name: "About Us", href: "/about" },
          { name: "Career", href: "/career" },
        ].map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-2xl font-semibold"
            onClick={() => handleLinkClick(link.href)}
          >
            {link.name}
          </Link>
        ))}
        <button
          className="py-2 px-4 bg-[#FFC802] text-black rounded-lg text-2xl font-semibold"
          onClick={() => setIsModalOpen(true)}
        >
          Contact Us
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[200]">
          <div className="bg-white   shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-4 text-gray-700 text-3xl "
            >
              x
            </button>
            <ModelFormPopup />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
