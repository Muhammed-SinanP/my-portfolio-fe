"use client";
import { allSectionIds, navLinks } from "@/data/nav";
import { useEffect, useState } from "react";
import useScrollPosition from "@/hooks/useScrollPostion";
import { RiMenu3Fill } from "react-icons/ri";
import { scrollToSection } from "@/utils/scrollToSection";
import useActiveSection from "@/hooks/useActiveSection";
import DarkModeBtn from "../buttons/DarkModeBtn";
import Sidebar from "../Sidebar";

const Header = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const activeSection = useActiveSection(allSectionIds);

  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(4);
    }
  }, []);
  const screenHeightScrolled = useScrollPosition(screenHeight);
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <header
      className={`header ${
        screenHeightScrolled ? "header-after-scroll" : "header-before-scroll"
      }`}
    >
      <h1
        onClick={() => scrollToSection("hero-section")}
        className="sm:w-1/4 font-brand text-3xl font-bold text-brand text-shadow-sm cursor-pointer"
      >
        Sinan
      </h1>

      <nav className="hidden md:flex justify-center sm:w-2/4 ">
        <ul className="bg-white dark:bg-neutral-950 flex items-center gap-2 shadow-sm dark:shadow-black rounded-2xl ">
          {navLinks.map((navLink) => (
            <li
              key={navLink.index}
              className={`nav-item text-sm rounded-2xl ${
                activeSection === navLink.sectionId
                  ? "nav-item-active"
                  : "nav-item-not-active"
              } `}
              onClick={() => scrollToSection(navLink.sectionId)}
            >
              {navLink.title}
            </li>
          ))}
        </ul>
      </nav>

      <div className="sm:w-1/4 flex gap-6 items-center justify-end">
        <div className="hidden md:block">
          <DarkModeBtn />
        </div>
        <div
          className={`p-0.5 hidden md:block rounded-3xl border-2 ${
            activeSection === "contact-section"
              ? "border-teal-600"
              : "border-transparent"
          }`}
        >
          <button
            onClick={() => scrollToSection("contact-section")}
            className={`hidden md:flex cursor-pointer tracking-wide bg-brand bg-brand-dark-hover text-white font-medium font-sans items-center p-2 px-3 rounded-3xl text-sm ${
              activeSection === "contact-section" ? "bg-brand-dark" : ""
            }`}
          >
            Contact Me
          </button>
        </div>

        <RiMenu3Fill
          onClick={() => setSidebarOpen(true)}
          size={35}
          className="text-brand block md:hidden cursor-pointer"
        />
      </div>

      <div
        className={`fixed md:hidden left-0 top-0 h-screen w-full z-10 bg-black opacity-60 transition-opacity duration-500  ${
          sidebarOpen ? "visible" : "invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </header>
  );
};

export default Header;
