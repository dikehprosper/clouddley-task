import GridIconAlt from "@/assets/icons/GridIconAlt"
import GearShapeIcon from "@/assets/icons/GearShapeIcon"
import ExchangeIcon from "@/assets/icons/ExchangeIcon"
import LinkChainIcon from "@/assets/icons/LinkChainIcon"
import NetworkIcon from "@/assets/icons/NetworkIcon"
import ChartIcon from "@/assets/icons/ChartIcon"
import LockIcon from "@/assets/icons/LockIcon"

const ThirdSection = () => {
    return (
        <div className="flex w-full mt-[100px] px-[298px] justify-between items-center flex-col">
            <span className="flex h-[16px] items-center gap-[6px] mb-[25px]">
                <GridIconAlt className="text-text-3" /> <span className="text-[14px] font-normal tracking-normal text-text-3">FEATURE HIGHLIGHTS</span>
            </span>
            <span className=" items-center gap-[6px] font-semibold text-[36px] text-text-3 tracking-normal mb-[70px] leading-tight">
                Everything You Need to Run and <br /> Tune Models,{" "}
                <span className="text-text inline-flex ">On Your Own GPU</span>
            </span>

            <div className="flex flex-col gap-[100px] justify-between">
                <div className="flex gap-[120px]">
                    <div className="flex flex-col items-center w-full">
                        <ExchangeIcon className="h-[42px] w-[42px] mb-[20px]" />
                        <span className="text-[19px] font-normal text-text mb-[15px] tracking-[0px] leading-[100%]">Bring Your Own Compute</span>
                        <span className="text-[19px] tracking-normal font-normal text-text-3  text-center leading-tight tracking-tight">You stay in control — no hosting fees <br /> or vendor lock-in.</span>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <GearShapeIcon className="h-[42px] w-[42px] mb-[20px]" />
                        <span className="text-[19px] font-normal text-text mb-[15px] tracking-[0px] leading-[100%]">Open-Source First</span>
                        <span className="text-[19px] font-normal text-text-3  text-center leading-tight tracking-tight">Train and deploy LLaMA, Mistral, Mixtral, <br /> and other top models.</span>
                    </div>
                </div>
                <div className="flex gap-[120px]">
                    <div className="flex flex-col items-center w-full">
                        <LinkChainIcon className="h-[42px] w-[42px] mb-[20px]" />
                        <span className="text-[19px] font-normal text-text mb-[15px] tracking-[0px] leading-[100%]">Bring Your Own Compute</span>
                        <span className="text-[19px] font-normal text-text-3  text-center leading-tight tracking-tight">Plug into LangChain, LlamaIndex, Flowise, and more with zero code changes.</span>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <NetworkIcon className="h-[42px] w-[42px] mb-[20px]" />
                        <span className="text-[19px] font-normal text-text mb-[15px] tracking-[0px] leading-[100%]">Hugging Face Integration</span>
                        <span className="text-[19px] font-normal text-text-3  text-center leading-tight tracking-tight">Access to over 45k hugging face models <br /> at your fingertips</span>
                    </div>
                </div>
                <div className="flex gap-[120px]">
                    <div className="flex flex-col items-center w-full">
                        <ChartIcon className="h-[42px] w-[42px] mb-[20px]" />
                        <span className="text-[19px] font-normal text-text mb-[15px] tracking-[0px] leading-[100%]">Fine-Tuning UI <span className="px-[10px] py-[7px] font-normal text-text text-center align-center rounded-full bg-background-6 text-[15px] ml-[10px] leading-none">
                            Coming Soon
                        </span>
                        </span>
                        <span className="text-[19px] font-normal text-text-3  text-center leading-tight tracking-tight">Monitor training, adjust configs, visualize <br /> metrics — all from the dashboard.</span>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <LockIcon className="h-[42px] w-[42px] mb-[20px]" />
                        <span className="text-[19px]  tracking-tight font-normal text-text mb-[15px] leading-none">Full Privacy & Data Sovereignty</span>
                        <span className="text-[19px] font-normal text-text-3  text-center leading-tight tracking-tight">We never store your data or models. <br /> Everything stays on your machine.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection
