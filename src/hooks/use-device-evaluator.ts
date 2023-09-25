import { useEffect, useState, useCallback } from "react";

export function useDeviceEvaluator() {
  const [windowWidthSize, setWindowSize] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 601 && window.innerWidth <= 900);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 901 && window.innerWidth <= 1200);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

  const handleWindowResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    setIsMobile(windowWidthSize <= 600);
    setIsTablet(windowWidthSize >= 601 && windowWidthSize <= 900);
    setIsLaptop(windowWidthSize >= 901 && windowWidthSize <= 1200);
    setIsDesktop(windowWidthSize >= 1200);
  }, [windowWidthSize]);

  return { isMobile, isTablet, isLaptop, isDesktop };
}
