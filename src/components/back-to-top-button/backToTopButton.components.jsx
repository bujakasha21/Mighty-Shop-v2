import React, { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex">
      {backToTop && (
        <button
          onClick={scrollUp}
          className="fixed bottom-5 right-5 px-4 py-2 rounded-full w-[50px] h-[50px] bg-secondaryColor"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
