import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaPlusSquare } from "react-icons/fa"; // Correct import
import { useState } from "react";

const Navbar = () => {
  const [colorMode, setColorMode] = useState("light");

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="max-w-[1140px] px-4 mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between h-16">
        {/* Logo Section */}
        <div className="text-center">
          <Link
            to="/"
            className="text-[22px] sm:text-[28px] font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          >
            Product Store 🛒
          </Link>
        </div>

        {/* Action Buttons Section */}
        <div className="flex space-x-2 items-center">
          <Link to="/create">
            <button
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-500 dark:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Create Product"
            >
              <FaPlusSquare className="text-xl" />
            </button>
          </Link>
          <button
            onClick={toggleColorMode}
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-500 dark:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {colorMode === "light" ? (
              <IoMoon className="text-xl" />
            ) : (
              <LuSun className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
