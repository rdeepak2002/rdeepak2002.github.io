import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";

export default function useScreenState() {
  const [windowWidth, setWindowWidth] = useState<number>(isMobile ? 0 : 9999);
  const [windowHeight, setWindowHeight] = useState<number>(isMobile ? 0 : 9999);

  useEffect(() => {
    let listener: any = undefined;
    listener = document.addEventListener("resize", e => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    });
    return () => {
      document.removeEventListener("resize", listener);
    }
  });

  return [windowWidth, windowHeight];
}