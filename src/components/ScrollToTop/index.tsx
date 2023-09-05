import React, { useEffect, useState } from "react";
import { ImageButton, ScrollToTopButtonElement } from "./styles";

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollToTopButtonElement isVisible={isVisible} onClick={scrollToTop}>
      <ImageButton />
    </ScrollToTopButtonElement>
  );
};