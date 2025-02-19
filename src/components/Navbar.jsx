import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";

import { motion } from "framer-motion";
import Navigation from "./Navigation";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const [isHamburger, setIsHamburger] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Control") {
        setIsHamburger(!isHamburger);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch]);

  const handleLinkClick = () => {
    setIsHamburger(false);
  };

  return (
    <>
      <nav className="absolute top-0 w-screen h-24 flex justify-between z-50">
        <div className="flex gap-4">
          <button
            title="Menu"
            onClick={() => setIsHamburger(true)}
            className={`group border border-t-0 border-l-0 w-12 cursor-pointer ${
              theme === "dark" ? "border-black" : "border-white"
            } p-4 flex flex-col justify-center items-center gap-2 duration-300`}
          >
            <div
              className={`size-2 rounded-full ${
                theme === "dark" ? "bg-black" : "bg-white"
              } group-hover:translate-y-4 duration-300`}
            ></div>
            <div
              className={`size-2 rounded-full ${
                theme === "dark" ? "bg-black" : "bg-white"
              } group-hover:scale-150 duration-300`}
            ></div>
            <div
              className={`size-2 rounded-full ${
                theme === "dark" ? "bg-black" : "bg-white"
              } group-hover:-translate-y-4 duration-300`}
            ></div>
          </button>
          <div
            draggable={false}
            className={`${
              theme === "dark" ? "" : "text-white"
            } font-gabarito duration-300 select-none py-6`}
          >
            <h3 className="text-xl font-semibold tracking-wider">
              ORYZA SATIVA
            </h3>
            <h4 className="text-md font-semibold tracking-wider opacity-75">
              Frontend Developer
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2 pr-6 select-none">
          <button
            onClick={() => dispatch(toggleTheme())}
            disabled={theme === "dark"}
            className={`${
              theme === "dark" ? "" : "text-white opacity-50 cursor-pointer"
            } py-4 duration-300`}
          >
            L<span className="max-md:hidden">ight</span>
          </button>
          <p className={`${theme === "dark" ? "" : "text-white"} duration-300`}>
            /
          </p>
          <button
            onClick={() => dispatch(toggleTheme())}
            disabled={theme === "light"}
            className={`${
              theme === "dark" ? "opacity-50 cursor-pointer" : "text-white"
            } py-4 duration-300`}
          >
            D<span className="max-md:hidden">ark</span>
          </button>
        </div>
      </nav>

      <motion.section
        initial={{ opacity: 0 }}
        animate={isHamburger ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className={`fixed top-0 left-0 w-screen bottom-0 ${
          theme === "dark" ? "bg-white" : "bg-[#0D0D0D]"
        } p-[15%] z-50 duration-300 ${
          isHamburger ? "" : "pointer-events-none menu"
        }`}
      >
        <Navigation handleLinkClick={handleLinkClick} />
        <button
          onClick={() => setIsHamburger(false)}
          className={`group absolute bottom-0 left-0 flex justify-center items-center border-t cursor-pointer ${
            theme === "dark" ? "border-black" : "border-white"
          } w-full md:h-24 h-16`}
        >
          <div
            className={`absolute h-0.5 w-12 ${
              theme === "dark" ? "bg-[#0D0D0D]" : "bg-white"
            } rotate-45 group-hover:rotate-180 duration-300`}
          ></div>
          <div
            className={`absolute h-0.5 w-12 ${
              theme === "dark" ? "bg-[#0D0D0D]" : "bg-white"
            } -rotate-45 group-hover:-rotate-180 duration-300`}
          ></div>
        </button>
      </motion.section>
    </>
  );
};

export default Navbar;
