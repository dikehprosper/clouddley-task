import {useState, useEffect, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import CustomSvgIcon from "@/assets/icons/CustomSvgIcon";
const MistralImg = "/images/MistralImg.png";
const LlamaImg = "/images/LlamaImg.png";
const MistralAltImg = "/images/MistralAltImg.png";
const DeepseekImg = "/images/DeepseekImg.png";

const useCases = [
  {
    name: "Startups",
    desc: "Bootstrap with your own GPUs",
    img: MistralImg,
  },
  {
    name: "Researchers",
    desc: "Run experiments in a private, controllable space.",
    img: LlamaImg,
  },
  {
    name: "Enterprises",
    desc: "Host compliant LLMs without touching public cloud.",
    img: MistralAltImg,
  },
  {
    name: "Open-Source Hackers",
    desc: "Push the limits of what's possible on your own terms.",
    img: DeepseekImg,
  },
];

const FourthSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndexRef = useRef(null);

  useEffect(() => {
    let interval;

    const startInterval = () => {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % useCases.length);
      }, 3500);
    };
    const stopInterval = () => {
      clearInterval(interval);
    };
    startInterval();
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
      } else {
        startInterval();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      stopInterval();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const getDirection = () => {
    if (prevIndexRef.current === null) return "none";
    return activeIndex > prevIndexRef.current ? "down" : "up";
  };

  useEffect(() => {
    prevIndexRef.current = activeIndex;
  }, [activeIndex]);

  return (
    <div className='flex w-full mt-[100px] px-[187px] justify-between items-center flex-col'>
      <span className='flex h-[16px] items-center gap-[6px] mb-[25px]'>
        <CustomSvgIcon className='text-text-3' />{" "}
        <span className='text-[14px] font-normal tracking-normal text-text-3'>
          USE CASES
        </span>
      </span>
      <span className='items-center font-semibold text-[36px] text-text-3 tracking-normal mb-[70px] leading-tight text-center'>
        Built for{" "}
        <span className='text-text '>
          Developers, <br /> Researchers, and Teams
        </span>
      </span>
      <div className='flex justify-between w-full h-[590px]'>
        <div className='flex flex-col w-[48%] relative overflow-hidden justify-evenly h-full'>
          {useCases.map((item, index) => (
            <motion.div
              key={index}
              className='relative flex items-center h-[100px]'
              initial={{
                y:
                  prevIndexRef.current === null
                    ? 0
                    : activeIndex > prevIndexRef.current
                      ? 100
                      : -100,
                opacity: 0,
              }}
              animate={{y: 0, opacity: 1}}
              exit={{
                y: activeIndex > prevIndexRef.current ? -100 : 100,
                opacity: 0,
              }}
              transition={{duration: 0.23, ease: "easeInOut"}}
            >
              <p
                className={`leading-[100%] tracking-[0px] text-text text-[20px] font-normal p-[17px] ${activeIndex === index && getDirection() === "down" ? "animate-slide-from-bottom" : prevIndexRef.current === index && getDirection() === "down" ? "animate-slide-from-bottom-1" : activeIndex !== index && getDirection() === "up" ? "animate-slide-from-top" : prevIndexRef.current === 3 ? "animate-slide-from-top-1" : ""}`}
              >
                {item.name}
              </p>

              {activeIndex === index && (
                <motion.div
                  className='absolute flex border-[1.5px] border-text-5 p-[2px] rounded-2xl w-[72%] z-[1]'
                  initial={{
                    y: getDirection() === "down" ? -80 : 290,
                    opacity: 1,
                  }}
                  animate={{y: 0, opacity: 1}}
                  exit={{y: getDirection() === "down" ? 50 : -80, opacity: 0}}
                  transition={{duration: 0.14, ease: "easeInOut"}}
                >
                  <div className='flex flex-col bg-brand gap-[15px] p-[15px] rounded-xl w-full leading-[100%] tracking-[0px] text-text text-[20px] font-normal'>
                    <p>{item.name}</p>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className='!w-[52%] overflow-hidden h-full'>
          <AnimatePresence mode='wait'>
            <motion.img
              key={activeIndex}
              src={useCases[activeIndex].img}
              className='w-full object-contain'
              initial={{opacity: 0.4}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.14, ease: "easeInOut"}}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
