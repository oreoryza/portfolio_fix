import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doorToggle } from "../redux/slices/doorSlice";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const OpeningDoor = () => {
  const dispatch = useDispatch();
  const [isDoorHover, setIsDoorHover] = useState(false);
  const door = useSelector((state) => state.door.door);

  // set key untuk toggle pintu
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && door) {
        dispatch(doorToggle());
      } else if (event.key === "Escape" && !door) {
        dispatch(doorToggle());
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch, door]);

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-door">
      <AnimatePresence initial={false}>
        {door && (
          <motion.div
            initial={{ opacity: 0, scale: 10 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0, scale: 10 }}
            transition={{delay: 0.5, duration: 0.7}}
            onClick={() => dispatch(doorToggle())}
            className="absolute group w-40 h-64 bg-transparent border-8 border-yellow overflow-hidden"
          >
            <motion.div exit={{x: -20}} className="absolute w-4 h-full bg-yellow">
              <div className="w-full h-full bg-black/[.05]"></div>
            </motion.div>
            <motion.div
            exit={{opacity: 0, x:-10}}
              onMouseOver={() => setIsDoorHover(true)}
              onMouseOut={() => setIsDoorHover(false)}
              className="absolute flex justify-end items-center door active border border-black/[.05] cursor-pointer"
            >
              <div className="grid grid-cols-2 grid-rows-4 gap-4 h-full w-full p-4 pr-1">
                <div className="w-full h-full border-2 border-black/[.05]"></div>
                <div className="w-full h-full border-2 border-black/[.05]"></div>
                <div className="row-span-2 w-full h-full border-2 border-black/[.05]"></div>
                <div className="row-span-2 w-full h-full border-2 border-black/[.05]"></div>
                <div className="w-full h-full border-2 border-black/[.05]"></div>
                <div className="w-full h-full border-2 border-black/[.05]"></div>
              </div>
              <div className="min-w-2 min-h-2 bg-white rounded-full me-1"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {door && (
      <motion.div initial={{opacity:0}} animate={{opacity:0.5}} transition={{duration:0.3, delay:0.8}} className="font-gabarito mt-80 text-white select-none">
        {isDoorHover ? "" : "ENTER."}
      </motion.div>
      )}
    </div>
  );
};

export default OpeningDoor;
