import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const Navigation = ({ handleLinkClick }) => {
  const location = useLocation();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <motion.div
      className={`font-gabarito ${
        theme === "dark" ? "" : "text-white"
      } flex flex-col gap-1 md:text-4xl text-3xl select-none`}
    >
      <Link
        to="/"
        draggable={false}
        onClick={() => {
          handleLinkClick();
        }}
        className={`${
          location.pathname === "/"
            ? "text-blue line-through"
            : "hover:text-blue"
        } duration-300`}
      >
        Home
      </Link>
      <Link
        to="/projects"
        draggable={false}
        onClick={() => handleLinkClick()}
        className={`${
          location.pathname === "/projects"
            ? "text-blue line-through"
            : "hover:text-blue"
        } duration-300`}
      >
        Projects
      </Link>
      <Link
        to="/info"
        draggable={false}
        onClick={() => {
          handleLinkClick();
        }}
        className={`${
          location.pathname === "/info"
            ? "text-blue line-through"
            : "hover:text-blue"
        } duration-300`}
      >
        Info
      </Link>
      <Link
        to="/contact"
        draggable={false}
        onClick={() => {
          handleLinkClick();
        }}
        className={`${
          location.pathname === "/contact"
            ? "text-blue line-through"
            : "hover:text-blue"
        } duration-300`}
      >
        Contact
      </Link>
      <p
        className={`${
          theme === "dark" ? "" : "text-white"
        } text-sm opacity-50 select-none mt-8 duration-300`}
      >
        <i className="bi bi-c-circle"></i> ORYZA SATIVA
      </p>
    </motion.div>
  );
};

export default Navigation;
