import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";
import * as motion from "motion/react-client";

const BannerName = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDraggingRef = useRef(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  const onDrag = () => {
    isDraggingRef.current = true;
  };

  const onStop = () => {
    isDraggingRef.current = false;
  };

  const bounds = {
    left: 0,
    right: window.innerWidth - 100,
    top: 0,
    bottom: window.innerHeight - 100,
  };
  return (
    <div className="flex flex-col items-center gap-10 w-full py-12 z-40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease:"easeIn" }}
        className="font-gabarito font-medium text-8xl text-yellow hidden md:flex justify-between w-full select-none"
      >
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            O
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            R
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            Y
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            Z
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            A
          </h1>
        </Draggable>
      </motion.div>
      <div
        className={`${
          theme === "dark" ? "" : "text-white"
        } max-w-xl duration-300`}
      >
        <p className="md:text-center">
          I loves design and programming, which inspired my journey into
          frontend development. I'm eager to contribute my skills in React JS
          as part of a dynamic team of innovators and problem solvers.
        </p>
        <div className="font-medium flex md:justify-center items-center w-full gap-8 my-4">
          <Link
            to={"/projects"}
            onMouseOver={() => setIsHover1(true)}
            onMouseOut={() => setIsHover1(false)}
            className="underline hover:text-blue"
          >
            Projects
          </Link>
          <Link
            to={"/info"}
            onMouseOver={() => setIsHover2(true)}
            onMouseOut={() => setIsHover2(false)}
            className="underline hover:text-blue"
          >
            More info
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease:"easeIn" }}
        className="font-gabarito font-medium text-8xl text-yellow hidden md:flex justify-between w-full select-none"
      >
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            S
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            A
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            T
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            I
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            V
          </h1>
        </Draggable>
        <Draggable onDrag={onDrag} onStop={onStop}>
          <h1
            className={`${
              isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
            } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
          >
            A
          </h1>
        </Draggable>
      </motion.div>
    </div>
  );
};

export default BannerName;
