import React from "react";
import { useSelector } from "react-redux";
import hat from "../assets/hatguy.png";
import arc from "../assets/text_arc.svg";

import { PiStarFourLight } from "react-icons/pi";

const Info = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div
      className={`font-gabarito ${
        theme === "dark" ? "" : "text-white"
      } grid md:grid-cols-2 grid-cols-1 duration-300`}
    >
      <div className="group w-52 h-52 bg-yellow duration-300">
        <img
          src={hat}
          draggable={false}
          className="grayscale md:group-hover:grayscale-0 duration-300"
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="flex md:flex-col max-md:gap-2">
        <a
          draggable={false}
          href="https://www.linkedin.com/in/oryza-sativa-fedvp/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline flex hover:gap-1"
        >
          linkedin<i className="bi bi-arrow-right-short"></i>
        </a>
        <a
          draggable={false}
          href="https://www.instagram.com/oreoryza"
          target="_blank"
          rel="noopener noreferrer"
          className="underline flex hover:gap-1"
        >
          instagram<i className="bi bi-arrow-right-short"></i>
        </a>
        </div>
        <a
          draggable={false}
          href="https://drive.google.com/file/d/16UDl6EZl5vX1_UeDO_HRgNozdQKqTTbx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 underline flex hover:gap-1"
        >
          resume<i className="bi bi-arrow-right-short"></i>
        </a>
      </div>
      <div className="flex flex-col p-4">
        <p className="font-semibold">my tech stack :</p>
        <div className="grid grid-cols-2 mt-2">
          <a
            draggable={false}
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            reactjs
          </a>
          <a
            draggable={false}
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            css vanilla
          </a>
          <a
            draggable={false}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            redux
          </a>
          <a
            draggable={false}
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            tailwind
          </a>
          <a
            draggable={false}
            href="https://axios-http.com/docs/intro"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            axios
          </a>
          <a
            draggable={false}
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            bootstrap
          </a>
          <a
            draggable={false}
            href="https://jestjs.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            jest
          </a>
          <a
            draggable={false}
            href="https://motion.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            motion
          </a>
          <a
            draggable={false}
            href="https://www.cypress.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            cypress
          </a>
          <a
            draggable={false}
            href="https://www.figma.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            figma
          </a>
        </div>
      </div>
      <div className="max-md:hidden w-52 h-52 bg-blue flex justify-center items-center">
        <img draggable={false} src={arc} alt="" className="w-[75%] arc" />
        <div className="group absolute bg-white size-16 rounded-full flex justify-center items-center cursor-pointer">
          <PiStarFourLight className="text-2xl text-blue group-hover:opacity-0 duration-300" />
          <p className="absolute text-center text-xs text-blue opacity-0 group-hover:opacity-100 duration-300">coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
