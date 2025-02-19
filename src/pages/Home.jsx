import React, { useEffect, useState } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import OpeningDoor from "../components/OpeningDoor";
import { useDispatch, useSelector } from "react-redux";
import { doorToggle } from "../redux/slices/doorSlice";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

import BannerName from "../components/BannerName";
import ProjectsList from "../components/ProjectsList";
import ProjectDetail from "../components/ProjectDetail";
import Form from "../components/Form";
import Info from "../components/Info";
import Navbar from "../components/Navbar";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const door = useSelector((state) => state.door.door);
  const theme = useSelector((state) => state.theme.theme);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    // ketika pintu dibuka background berubah
    if (door) {
      document.body.style.backgroundColor = "#3060B7";
      document.body.style.backgroundImage =
        "url(data:image/png;base64,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)";
    } else if (theme === "dark") {
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.backgroundColor = "#0D0D0D";
      document.body.style.backgroundImage = "none";
    }
  }, [door, theme]);

  // set deskripsi dan judul untuk tiap halaman route
  useEffect(() => {
    if (location.pathname === "/") {
      setDesc("Personal Portfolio Website.");
      setTitle("");
    } else if (location.pathname === "/projects") {
      setDesc("These are my personal projects.");
      setTitle("PROJECTS");
    } else if (location.pathname === "/info") {
      setDesc("I am from Cirebon, Indonesia.");
      setTitle("INFO");
    } else if (location.pathname === "/contact") {
      setDesc("Anything. Anytime. Anywhere. ");
      setTitle("CONTACT");
    } else {
      setDesc("");
      setTitle("");
    }
  }, [location.pathname]);

  return (
    <>
      <OpeningDoor />
      <AnimatePresence initial={false}>
        {!door && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{
              delay: 0.8,
              type: "spring",
              stiffness: 75,
              damping: 10,
              duration: 0.5,
            }}
            className="absolute top-0 bottom-0 flex justify-center items-center w-full overflow-hidden"
          >
            <Navbar />
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-screen flex justify-center items-center px-16"
              >
                {/* routing untuk halaman */}
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<BannerName />} />
                  <Route path="/projects" element={<ProjectsList />} />
                  <Route path="/projects/:sku" element={<ProjectDetail />} />
                  <Route path="/contact" element={<Form />} />
                  <Route path="/info" element={<Info />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
            <div
              className={`${
                theme === "dark" ? "border-black" : "text-white border-white"
              } absolute flex flex-col justify-end items-center gap-6 top-0 left-0 border-r w-12 bottom-0 duration-300`}
            >
              <p
                className={`font-gabarito rotate-180 border-t ${
                  theme === "dark" ? "border-black" : "border-white"
                } w-full flex items-center px-4`}
                style={{ writingMode: "vertical-rl" }}
              >
                {desc}
              </p>
              <div
                title="Exit"
                onClick={() => dispatch(doorToggle())}
                className="w-6 h-6 bg-yellow border-l-2 border-t-2 border-blue my-4 hover:-rotate-90 duration-300 cursor-pointer"
              ></div>
            </div>
            <div
              className={`${
                theme === "dark" ? "" : "text-white"
              } absolute bottom-4 left-16 max-md:hidden text-sm flex gap-6 opacity-50 select-none duration-300`}
            >
              <p>
                <span className="border p-0.5 rounded">Ctrl</span> Menu
              </p>
              <p>
                <span className="border p-0.5 rounded">Esc</span> Exit
              </p>
            </div>
            <h2 className="absolute bottom-0 right-0 font-gabarito font-bold md:text-9xl text-6xl text-yellow md:translate-y-5 translate-y-2 select-none pointer-events-none -z-50">
              {title}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
