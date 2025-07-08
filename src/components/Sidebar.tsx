import { allSectionIds, navLinks } from "@/data/nav";
import useActiveSection from "@/hooks/useActiveSection";
import { scrollToSection } from "@/utils/scrollToSection";
import { RiMenu2Fill } from "react-icons/ri";
import DarkModeBtn from "./buttons/DarkModeBtn";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const activeSection = useActiveSection(allSectionIds);
  return (
    <div
      id="sidebar"
      className={`h-screen md:hidden shadow-md shadow-gray-800 dark:shadow-black w-2/3 fixed top-0 right-0 z-30 bg-[#f9fffe] dark:bg-base-300 transform transition-transform duration-500 ease-in-out ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-start pl-2 pt-4 pb-3.5">
        <RiMenu2Fill
          onClick={() => setSidebarOpen(false)}
          size={38}
          className="cursor-pointer text-brand"
        />
      </div>
      <ul
        onClick={() => setSidebarOpen(false)}
        className="border-t border-gray-700 dark:border-gray-300"
      >
        {navLinks.map((navLink) => (
          <li
            key={navLink.index}
            onClick={() => scrollToSection(navLink.sectionId)}
            className={`nav-item text-xl border-b border-gray-700 dark:border-gray-300
              ${
                activeSection === navLink.sectionId
                  ? "nav-item-active"
                  : "nav-item-not-active"
              }`}
          >
            {navLink.title}
          </li>
        ))}
        <li
          onClick={() => scrollToSection("contact-section")}
          className={`nav-item text-xl border-b border-gray-700 dark:border-gray-300
              ${
                activeSection === "contact-section"
                  ? "nav-item-active"
                  : "nav-item-not-active"
              }`}
        >
          Contact me
        </li>
      </ul>
      <div className="h-full flex items-center justify-center">
        <DarkModeBtn text={true} />
      </div>
    </div>
  );
};

export default Sidebar;
