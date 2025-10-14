import { useState, useEffect } from "react"
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon"
import SuccessfulIcon from "../../assets/icons/SuccessfulIcon"
import ButtonFirstVariation from "../atoms/ButtonFirstVariation"
import CircularLoaderDemo from "./CircularLoaderDemo"
import LocalhostImg from "@/assets/images/LocalhostImg.png"
import ModelImg1 from "@/assets/images/ModelImg1.png"
import ModelImg2 from "@/assets/images/ModelImg2.png"
import ModelImg3 from "@/assets/images/ModelImg3.png"
import ChatFrame from "@/assets/images/ChatFrame.png"
import ChatFrame1 from "@/assets/images/ChatFrame1.png"

const DisplayCard = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [completed, setCompleted] = useState(false)
    const [loopCount, setLoopCount] = useState(1)
    const TOTAL_STEPS = 3
    const MAX_LOOPS = 6

    const handleStepDone = () => setActiveStep((prev) => prev + 1)


    useEffect(() => {
        if (activeStep >= TOTAL_STEPS) {
            if (loopCount >= MAX_LOOPS) {
                setLoopCount(1)
                setActiveStep(0)
                setCompleted(false)
            } else {
                setLoopCount((prev) => prev + 1)
                setActiveStep(0)
            }
        }
    }, [activeStep, loopCount])

    return (
        <div className="flex w-[52%] bg-background-1 border-[1.5px] border-text-3/5 rounded-4xl p-[15px]">
            <div className="flex rounded-2xl bg-background-3 w-full flex-col pb-[37px]">
                <div className="h-[8%] rounded-t-2xl bg-background-4 w-full flex items-center justify-center gap-[10px] leading-none font-medium text-[15px]">
                    <span className={`${activeStep >= 0 ? "text-text" : "text-text-3"}`}>CONNECT</span>
                    <ArrowRightIcon className="h-[12px]" color={`${activeStep >= 0 ? "#FFFFFF" : "#98A2B3"}`} />
                    <span className={`${activeStep >= 1 ? "text-text" : "text-text-3"}`}>DEPLOY</span>
                    <ArrowRightIcon className="h-[12px]" color={`${activeStep >= 1 ? "#FFFFFF" : "#98A2B3"}`} />
                    <span className={`${activeStep >= 2 ? "text-text" : "text-text-3"}`}>CHAT</span>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    {!completed && (
                        <>
                            {activeStep === 0 && <FirstDisplaySection onDone={handleStepDone} active={activeStep === 0 && true} loopCount={loopCount} />}
                            {activeStep === 1 && <SecondDisplaySection onDone={handleStepDone} active={activeStep === 1 && true} loopCount={loopCount} />}
                            {activeStep === 2 && <ThirdDisplaySection onDone={handleStepDone} active={activeStep === 2 && true} loopCount={loopCount} />}
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default DisplayCard


const FirstDisplaySection = ({ onDone, active, loopCount }) => {
    const [phase, setPhase] = useState(0)
    const [slideOut, setSlideOut] = useState(false)
    const [loaderVisible, setLoaderVisible] = useState(false)

    useEffect(() => {
        if (!active) return

        setSlideOut(false)
        setLoaderVisible(false)

        if (loopCount % 2 === 1) {
            setPhase(0)
            const midTimer = setTimeout(() => setPhase(1), 3000)
            const endTimer = setTimeout(() => {
                onDone && onDone()
            }, 6000)

            return () => {
                clearTimeout(midTimer)
                clearTimeout(endTimer)
            }
        }

        if (loopCount % 2 === 0) {
            setPhase(1)

            const midTimer = setTimeout(() => {
                setSlideOut(true)

                setTimeout(() => {
                    setPhase(0)
                }, 200)

                setTimeout(() => {
                    setLoaderVisible(true)
                }, 230)

            }, 3000)

            const endTimer = setTimeout(() => {

                const afterSlide = setTimeout(() => {
                    onDone && onDone()
                }, 50)

                return () => clearTimeout(afterSlide)
            }, 7000)

            return () => {
                clearTimeout(midTimer)
                clearTimeout(endTimer)
            }
        }
    }, [active, onDone, loopCount])

    return (
        <div className="flex h-full p-[24px] flex-col justify-between transition-all duration-500 ease-in-out">
            <span
                className="text-text-3 font-normal text-[15px] tracking-[1px]"
                style={{ fontFamily: "'SFMono', monospace" }}
            >
                CONNECT YOUR MACHINE
            </span>

            <div className="flex-1 px-[36px] flex items-center justify-center">
                <div className="relative h-[229px] w-full overflow-hidden">
                    <img
                        src={LocalhostImg}
                        alt="Localhost"
                        className="h-full w-full object-contain transition-opacity duration-1000 ease-in-out"
                        style={{
                            WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                            maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                        }}
                    />
                </div>
            </div>

            <div className="flex justify-center gap-[15px] overflow-hidden relative">
                {phase === 0 && (
                    <div
                        className={`transform transition-all duration-600 ease-out ${loopCount % 2 === 0
                            ? loaderVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-[-120%] opacity-0"
                            : "translate-x-0 opacity-100"
                            }`}
                    >
                        <ButtonFirstVariation
                            firstClassName="font-normal inline-flex text-text rounded-full bg-background-7 p-[2px]"
                            secondClassName="secondGradientVariation py-[10px] px-[16px] rounded-full font-normal text-[16px] tracking-[0px] whitespace-nowrap leading-none"
                            children={<CircularLoaderDemo />}
                        />
                    </div>
                )}

                {phase === 1 && (
                    <div
                        className={`transform transition-all duration-600 ease-in-out ${loopCount % 2 === 0
                            ? slideOut
                                ? "translate-x-[120%] opacity-0"
                                : "translate-x-0 opacity-100"
                            : "translate-x-0 opacity-100"
                            }`}
                    >
                        <ButtonFirstVariation
                            firstClassName="font-normal inline-flex text-text rounded-full bg-background-7 p-[2px]"
                            secondClassName="secondGradientVariation py-[10px] px-[16px] rounded-full font-normal text-[16px] tracking-[0px] whitespace-nowrap leading-none gap-[7.5px] flex items-center justify-center"
                            title="Connected successfully to your dashboard"
                            children={<SuccessfulIcon />}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}


const SecondDisplaySection = ({ onDone, active, loopCount }) => {
    const [phase, setPhase] = useState(0)
  const [buttonPhase, setButtonPhase] = useState({
  phase: 0, 
  slide: false, 
})

    useEffect(() => {
        if (!active) return
        setButtonPhase({ phase: 0, slide: false })

        if (loopCount === 1 || loopCount === 3 || loopCount === 5 ) {
         setPhase(0)
        const first = setTimeout(() => {
            setPhase(1)

            const second = setTimeout(() => {
                setPhase(2)
            }, 500)

            return () => clearTimeout(second)
        }, 2000)
        return () => clearTimeout(first)
        }

        if (loopCount === 2 || loopCount === 4 || loopCount === 6) {
         setPhase(2)
        }
      
    }, [active, loopCount])


    useEffect(() => {
        if (phase !== 2) return
           let timers
        if (loopCount === 1) {
           setButtonPhase({ phase: 1, slide: false })
         timers = [
            setTimeout(() => setButtonPhase({ phase: 2, slide: false }), 2000),
            setTimeout(() => setButtonPhase({ phase: 3, slide: false }), 2200),
            setTimeout(() => setButtonPhase({ phase: 4, slide: true }), 4500),
            setTimeout(() => {
                if (typeof onDone === "function") onDone()
            }, 6000)
        ]
        } else if (loopCount === 2 ) {
              setButtonPhase({ phase: 4, slide: false })
         timers = [
            setTimeout(() => setButtonPhase({ phase: 1, slide: true }), 3000),
            setTimeout(() => setButtonPhase({ phase: 2, slide: false }), 5000),
            setTimeout(() => setButtonPhase({ phase: 3, slide: false }), 5100),
            setTimeout(() => setButtonPhase({ phase: 4, slide: true }), 7600),
            setTimeout(() => {
                if (typeof onDone === "function") onDone()
            }, 8200)
        ]
        } else if (loopCount === 3) { 
         setButtonPhase({ phase: 4, slide: false })
         timers = [
           setTimeout(() => setButtonPhase({ phase: 1, slide: true }), 4000),
            setTimeout(() => setButtonPhase({ phase: 2, slide: false }), 5300),
            setTimeout(() => setButtonPhase({ phase: 3, slide: false }), 5400),
            setTimeout(() => setButtonPhase({ phase: 4, slide: true }), 7000),
            setTimeout(() => {
                if (typeof onDone === "function") onDone()
            }, 7000)
        ]
        } else if (loopCount === 4) { 
         setButtonPhase({ phase: 3, slide: false })
         timers = [
            setTimeout(() => setButtonPhase({ phase: 4, slide: true }), 3500),
            setTimeout(() => setButtonPhase({ phase: 1, slide: true }), 7800),
            setTimeout(() => setButtonPhase({ phase: 2, slide: false }), 10800),
             setTimeout(() => setButtonPhase({ phase: 3, slide: false }), 10900),
            setTimeout(() => {
                if (typeof onDone === "function") onDone()
            }, 11900)
        ]
          } else if (loopCount === 5) { 
         setButtonPhase({ phase: 3, slide: false })
         timers = [
            setTimeout(() => setButtonPhase({ phase: 4, slide: true }), 3000),
            setTimeout(() => setButtonPhase({ phase: 1, slide: true }), 7500),
            setTimeout(() => {
                if (typeof onDone === "function") onDone()
            }, 8500)
        ]
          } else if (loopCount === 6) { 
         setButtonPhase({ phase: 1, slide: false })
         timers = [
            setTimeout(() => setButtonPhase({ phase: 2, slide: false }), 2700),
            setTimeout(() => setButtonPhase({ phase: 3, slide: false }), 2800),
            setTimeout(() => setButtonPhase({ phase: 4, slide: true }), 5400),
              setTimeout(() => setButtonPhase({ phase: 1, slide: true }), 8900),
            setTimeout(() => {
                if (typeof onDone === "function") onDone()
            }, 9900)
        ]
        }

       
        return () => timers.forEach(clearTimeout)
    }, [phase, onDone, loopCount])


    const image =
        phase === 0 ? ModelImg1 : phase === 1 ? ModelImg2 : ModelImg3

    return (
        <div className="flex h-full p-[24px] flex-col justify-between w-full">
            <span
                className="text-text-3 font-normal text-[15px] tracking-[1px]"
                style={{ fontFamily: "'SFMono', monospace" }}
            >
                PICK A MODEL
            </span>

            <div className="flex-1 px-[36px] flex flex-col items-center gap-[14px] justify-end">
                <div className="relative h-[350px] w-[500px] w-full overflow-hidden">
                    <img
                        src={image}
                        alt="Model"
                        className="h-[350px] w-[500px] object-contain transition-all duration-700"
                    />
                </div>
                <div className="flex justify-center h-[50px]">
                    {phase === 2 ? <ButtonFirstVariation
                        firstClassName={`font-normal inline-flex text-text rounded-full bg-background-7 p-[2px] `}
                        secondClassName={` ${buttonPhase.phase === 2 ? "!bg-background-8" : "secondGradientVariation"}  py-[10px] w-[192px] rounded-full font-normal text-[16px] leading-none flex items-center justify-center gap-[7.5px]`}
                        children={buttonPhase.phase === 1 || buttonPhase.phase === 2 ?
                            <span className="flex items-center justify-center overflow-hidden w-full">
                             <span className={`flex  justify-center items-center gap-2 ${buttonPhase.slide === true && "animate-return-from-top-right opacity-0"}`}>
                             Deploy To Your GPU
                             </span>
                            </span>
                        : buttonPhase.phase === 3 ? <CircularLoaderDemo /> : buttonPhase.phase === 4 ?
                            <span className=" flex items-center justify-center overflow-hidden w-full">
                                <span
                                    className={`flex justify-center ${buttonPhase.slide === true && "animate-slide-in-right opacity-0"} items-center gap-2`}
                                >
                                    <SuccessfulIcon /> Deployed
                                </span>
                            </span>
                            : ""}
                    /> : null}
                </div>
            </div>
        </div>
    )
}


const ThirdDisplaySection = ({ onDone, active, loopCount }) => {
    const [phase, setPhase] = useState(0)

    useEffect(() => {
        if (!active) return

        setPhase(0)

        const midTimer = setTimeout(() => setPhase(1), 2000)

        const sndMidTimer = setTimeout(() => setPhase(2), 3500)

        const endTimer = setTimeout(() => {
            if (typeof onDone === "function") onDone()
        }, 4500)

        return () => {
            clearTimeout(midTimer)
            clearTimeout(sndMidTimer)
            clearTimeout(endTimer)
        }
    }, [active, onDone, loopCount])

    return (
        <div className="flex h-full w-full p-[24px] flex-col justify-between transition-all duration-500 ease-in-out">
            <span
                className="text-text-3 font-normal text-[15px] tracking-[1px]"
                style={{ fontFamily: "'SFMono', monospace" }}
            >
                DEPLOY & CHAT
            </span>

            <div className="flex-1 px-[36px] flex items-center justify-center flex-col gap-[40px]">
                {phase >= 0 && (
                    <div className="relative h-[130px] w-full overflow-hidden">
                        <img
                            src={ChatFrame1}
                            alt="ChatFrame1"
                            className="h-full w-full object-contain transition-opacity duration-1000 ease-in-out opacity-100"
                        />
                    </div>
                )}

                <div className="relative h-[153px] w-full overflow-hidden">
                    <img
                        src={ChatFrame}
                        alt="ChatFrame"
                        className={`h-full w-full object-contain transition-opacity duration-[1000ms] ease-in-out ${phase === 0
                            ? "opacity-0"
                            : phase === 1
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                    />
                </div>
            </div>
        </div>
    )
}

