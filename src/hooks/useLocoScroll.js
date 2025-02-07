import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.scss";

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;
    let locoScroll = null;

    const scrollEl = document.querySelector(`[data-scroll-container]`);

    locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 5,
        easing: "easeInOutQuad",
        duration: 2000,
        offset: [0, 0],
    });
  }, [start]);
}