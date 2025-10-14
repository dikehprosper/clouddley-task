import GridIcon from "@/assets/icons/GridIcon"
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon"
import RocketShapeIcon from "@/assets/icons/RocketShapeIcon"
import GearIcon from "@/assets/icons/GearIcon"
import SquareClockIcon from "@/assets/icons/SquareClockIcon"

const SectionSection = () => {
    return (
        <div className="flex w-full mt-[100px] px-[131px] justify-between flex-col">
            <span className="flex  h-[16px] items-center gap-[6px] mb-[25px]">
                <GridIcon className="text-text-3" /> <span className="text-[14px] font-normal tracking-normal text-text-3">HOW IT WORKS</span>
            </span>
            <span className="flex h-[16px] items-center gap-[6px] font-semibold text-[36px] text-text-3 tracking-normal mb-[70px]">
                Simple Setup.  <span className="text-text">Full Control.</span>
            </span>
            <div className="flex w-full justify-between border-[.8px] border-background-5">
                <div className="text-text flex flex-col flex-1 w-1/3 h-[600px] p-[21px] border-r border-background-5">
                    <span className="text-[20px] tracking-[0px] leading-none font-normal text-text-3 mb-[15px]">Step 1</span>
                    <span className="text-[20px] tracking-[0px] leading-none font-normal text-text mb-[10px]">Connect</span>

                    <span className="flex flex-1 items-center justify-center">
                        <GearIcon className="h-[100px]" />
                    </span>

                    <span className="flex flex-col gap-[30px]">
                        <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                            Install our lightweight agent on your GPU machine (bare-metal, cloud VM, or desktop). We handle setup and monitoring
                        </span>
                        <span className="flex justify-end leading-none">
                            <ArrowRightIcon className="w-[19px] h-[12px]" />
                        </span>
                    </span>
                </div>

                <div className="text-text flex flex-col w-1/3 flex-1 h-[600px] p-[21px] border-r border-background-5">
                    <span className="text-[20px] tracking-[0px] leading-none font-normal text-text-3 mb-[15px]">Step 2</span>
                    <span className="text-[20px] tracking-[0px] leading-none font-normal text-text mb-[10px]">Pick a Model</span>

                    <span className="flex flex-1 items-center justify-center leading-none">
                        <SquareClockIcon className="h-[100px]" />
                    </span>

                    <span className="flex flex-col gap-[30px]">
                        <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                            Choose from popular open-source models like LLaMA, Mistral, Mixtral, and more.
                            Then optionally fine-tune with your own dataset.
                        </span>
                        <span className="flex justify-end leading-none">
                            <ArrowRightIcon className="w-[19px] h-[12px]" />
                        </span>
                    </span>
                </div>


                <div className="text-text flex flex-col w-1/3 flex-1 h-[600px] p-[21px]">
                    <span className="text-[20px] tracking-[0px] leading-none font-normal text-text-3 mb-[15px]">Step 3</span>
                    <span className="text-[20px] tracking-[0px] leading-none font-normal text-text mb-[10px]">Deploy & Chat</span>

                    <span className="flex flex-1 items-center justify-center">
                        <RocketShapeIcon className="h-[100px]" />
                    </span>

                    <span className="flex flex-col gap-[30px]">
                        <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                            Turn your machine into an OpenAI- compatible API endpoint. Chat with your model, integrate it into apps, or use it in your team workflows.
                        </span>
                        <span className="flex justify-end leading-none">
                            <ArrowRightIcon className="w-[19px] h-[12px]" />
                        </span>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default SectionSection
