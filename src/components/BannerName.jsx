import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import * as motion from "motion/react-client";

// Register GSAP plugins
gsap.registerPlugin(Draggable, InertiaPlugin);

const BannerName = () => {
  const theme = useSelector((state) => state.theme.theme);
  const isDraggingRef = useRef(false);
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  // Refs for draggable elements
  const oRef = useRef(null);
  const rRef = useRef(null);
  const yRef = useRef(null);
  const zRef = useRef(null);
  const aRef = useRef(null);
  const sRef = useRef(null);
  const a2Ref = useRef(null);
  const tRef = useRef(null);
  const iRef = useRef(null);
  const vRef = useRef(null);
  const a3Ref = useRef(null);

  // Refs for containers
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const draggables = [];

    const createDraggable = (element, container) => {
      if (element && container) {
        const draggable = Draggable.create(element, {
          bounds: container,
          inertia: true,
          onDrag: onDrag,
          onDragEnd: onStop,
        });
        draggables.push(draggable);
      }
    };

    // Create draggables for all elements with banner as bounds
    createDraggable(oRef.current, bannerRef.current);
    createDraggable(rRef.current, bannerRef.current);
    createDraggable(yRef.current, bannerRef.current);
    createDraggable(zRef.current, bannerRef.current);
    createDraggable(aRef.current, bannerRef.current);
    createDraggable(sRef.current, bannerRef.current);
    createDraggable(a2Ref.current, bannerRef.current);
    createDraggable(tRef.current, bannerRef.current);
    createDraggable(iRef.current, bannerRef.current);
    createDraggable(vRef.current, bannerRef.current);
    createDraggable(a3Ref.current, bannerRef.current);

    // Cleanup function
    return () => {
      draggables.forEach(draggable => {
        if (draggable && draggable[0]) {
          draggable[0].kill();
        }
      });
    };
  }, []);

  // Dragging alphabet of the name
  const onDrag = () => {
    isDraggingRef.current = true;
  };

  const onStop = () => {
    isDraggingRef.current = false;
  };

  return (
    <div ref={bannerRef} className="flex flex-col items-center justify-center gap-10 w-full h-[80vh] py-12 z-40 overflow-hidden">
      <motion.div
        ref={container1Ref}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
        className="font-gabarito font-medium text-8xl text-yellow hidden md:flex justify-between w-full select-none"
      >
        <h1
          ref={oRef}
          className={`${
            isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          O
        </h1>
        <h1
          ref={rRef}
          className={`${
            isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          R
        </h1>
        <h1
          ref={yRef}
          className={`${
            isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          Y
        </h1>
        <h1
          ref={zRef}
          className={`${
            isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          Z
        </h1>
        <h1
          ref={aRef}
          className={`${
            isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          A
        </h1>
      </motion.div>
      <div
        className={`${
          theme === "dark" ? "" : "text-white"
        } max-w-xl duration-300`}
      >
        <p className="md:text-center">
          I loves design and programming, which inspired my journey into
          frontend development. I'm eager to contribute my skills in React JS and Webflow as
          part of a dynamic team of innovators and problem solvers.
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
        ref={container2Ref}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
        className="font-gabarito font-medium text-8xl text-yellow hidden md:flex justify-between w-full select-none"
      >
        <h1
          ref={sRef}
          className={`${
            isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          S
        </h1>
        <h1
          ref={a2Ref}
          className={`${
            isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          A
        </h1>
        <h1
          ref={tRef}
          className={`${
            isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          T
        </h1>
        <h1
          ref={iRef}
          className={`${
            isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          I
        </h1>
        <h1
          ref={vRef}
          className={`${
            isHover1 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          V
        </h1>
        <h1
          ref={a3Ref}
          className={`${
            isHover2 ? "text-blue -translate-y-4 transition-transform" : ""
          } active:text-blue cursor-grab active:cursor-grabbing transition-colors duration-300`}
        >
          A
        </h1>
      </motion.div>
    </div>
  );
};

export default BannerName;
