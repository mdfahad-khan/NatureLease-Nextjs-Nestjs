import React, { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaSun,
  FaMoon,

} from "react-icons/fa";
import { MdPublic, MdChatBubble } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import Image from "next/image";

import { useTheme } from "next-themes";
//main dashboard
const AdminNavbar = () => {
    const { theme, setTheme } = useTheme();
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);
  
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
  
    return (
      <div className="flex items-center border-b-[2px] border-gray-200  w-full h-16 bg-[#FFFFFF]">
        <div className="ml-12 text-xl font-bold">Fahad</div>
        <div className="p-4  flex justify-between w-full">
          <div className="flex justify-start ml-32 bg-white rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-32 bg-transparent border-none"
            />
            <FaSearch className="text-gray-500 mt-1 mr-2" />
          </div>
          <div className="flex justify-end space-x-8 text-gray-600 text-xl">
            <div className="flex items-center space-x-4">
              <MdPublic />
              <span>English</span>
            </div>
            {theme === "light" ? (
              <FaSun onClick={toggleTheme} />
            ) : (
              <FaMoon onClick={toggleTheme} />
            )}{" "}
            {/* Day/Night mode icon */}
            <FaBell />
            <MdChatBubble />
            <Image
              src="/Assets/display.jpg"
              alt="Description of image"
              width={30}
              height={30}
              className="rounded-full"
            />
            <div onClick={toggleDropdown}>
              {" "}
              <IoIosSettings />
            </div>
            {showDropdown && (
              <div className="absolute right-0 mt-12 w-48 bg-white rounded-sm shadow-xl z-10 ">
                {/* Dropdown content */}
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Setting 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Setting 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Setting 3
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  export default AdminNavbar;