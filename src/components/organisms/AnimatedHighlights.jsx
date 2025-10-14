import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ShieldIcon from "@/assets/icons/ShieldIcon";
import SpeedIcon from "@/assets/icons/SpeedIcon";
import CpuCharge from "@/assets/icons/CpuCharge";

const AnimatedHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(-1); 

  const items = [
    {
      id: 1,
      icon: <ShieldIcon className="transition-colors duration-500" />,
      text: "Your data. Your model. Your machine.",
    },
    {
      id: 2,
      icon: <SpeedIcon className="transition-colors duration-500" />,
      text: "Go from GPU to API in under 10 mins",
    },
    {
      id: 3,
      icon: <CpuCharge className="transition-colors duration-500" />,
      text: "No queue. No wait. Instant fine-tuning.",
    },
  ];

  useEffect(() => {
    let isMounted = true;

    const runAnimationLoop = async () => {
      if (!isMounted) return;

      await new Promise((resolve) => setTimeout(resolve, 2300));

      for (let i = 0; i < items.length; i++) {
        if (!isMounted) return;
        setActiveIndex(i);
        await new Promise((resolve) => setTimeout(resolve, 2300))
      }

      setActiveIndex(-1);

      if (isMounted) runAnimationLoop(); 
    };

    runAnimationLoop();

    return () => {
      isMounted = false;
    };
  }, [items.length]);

  return (
    <div className="mt-[35px] flex flex-col gap-[25px] h-[106px]">
      {items.map((item, i) => {
        const isActive = i === activeIndex;

        return (
          <motion.span
            key={item.id}
            animate={{
              color: isActive ? "#ffffff" : "rgb(126, 128, 138)",
              height: isActive ? 20 : 18,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex leading-[130%] tracking-[0px] text-[16px] items-center text-text-3"
          >
            <span
              className={`h-[18px] w-[18px] flex items-center justify-center mr-[9.5px] transition-all duration-300 ${
                isActive ? "text-white scale-105" : "text-text-3 scale-100"
              }`}
            >
              {item.icon}
            </span>
            {item.text}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedHighlights;
