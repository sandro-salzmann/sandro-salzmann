import { RefObject, useEffect, useState } from "react";

export const useOverflowsOnTop = (elementRef: RefObject<HTMLDivElement>, offset = 0) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const navbarTop = elementRef.current.getBoundingClientRect().top;
        setIsOverflowing(navbarTop <= offset);
      }
    };

    document.getElementsByTagName("main")[0]?.addEventListener("scroll", handleScroll);

    return () => {
      document.getElementsByTagName("main")[0]?.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, offset]);

  return isOverflowing;
};
