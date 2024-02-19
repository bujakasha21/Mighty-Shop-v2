import React, { useEffect, useRef } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

const SlidingToLeft = (props) => {
  const myRef = useRef(null);
  const isInView = useInView(myRef, { once: true });

  const animate = useAnimation();

  useEffect(() => {
    if (isInView) {
      animate.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={myRef} className="relative overflow-hidden w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={animate}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};

export default SlidingToLeft;
