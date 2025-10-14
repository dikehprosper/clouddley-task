import ComplexIcon from "@/assets/icons/ComplexIcon"
import LinesIcon from "@/assets/icons/LinesIcon"
import ChatCircleIcon from "@/assets/icons/ChatCircleIcon"
import SpeedIcon from "@/assets/icons/SpeedIcon"
import MicroShipIcon from "@/assets/icons/MicroShipIcon"

const SixthSection = () => {
    return (
        <div className="flex w-full mt-[100px] px-[116px] justify-between flex-col items-center">
            <span className="flex h-[16px] items-center gap-[6px] mb-[25px]">
                 <MicroShipIcon />
             <span className="text-[14px] font-normal tracking-normal leading-none text-text-3 ">RUN GGUF MODELS FROM HUGGING FACE</span>
            </span>
            <span className="items-center font-semibold text-[36px] text-text tracking-normal leading-tight text-center mb-[10px] ">
                Deploy {" "}
                <span className="text-text-3">
                    Any GGUF. Any <br /> Quant. Your GPU.
                </span>
            </span>
            <span className="text-[22px] text-text-3 mb-[70px] text-center font-normal rounded-full leading-[100%] tracking-[0px]">
                Bring any Hugging Face-hosted GGUF model — from <br /> Q2_K to Q8_0 — and run it on your connected CPU or <br /> GPU, optimized with llama.cpp.</span>

                <div className="flex w-full justify-between border-[.8px] border-background-5 overflow-x-scroll">
                    <div className="text-text flex flex-col min-w-[390px] h-[600px] p-[21px] border-r border-background-5">
                        <span className="text-[20px] tracking-[0px] leading-none font-normal text-text-3 mb-[15px]">01</span>
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">Paste & Go</span>
                        <span className="flex flex-1 items-center justify-center">
                            <SpeedIcon className="h-[95px] w-[100px]" height="100px" />     
                        </span>
                        <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                            {""} <br />
                            Drop in any GGUF model repo url (e.g. hf.co/TheBloke/Mistral-7B-Instruct-v0.1-GGUF) and launch it instantly.
                        </span>
                    </div>

                    <div className="text-text flex flex-col min-w-[400px] h-[600px] p-[21px] border-r border-background-5">
                        <span className="text-[20px] tracking-[0px] leading-none font-normal text-text-3 mb-[15px]">02</span>
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">Full Quantization Support</span>
                        <span className="flex flex-1 items-center justify-center">
                            <LinesIcon className="h-[100px]" />
                        </span>
                        <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                            Supports all major quant levels: Q2_K, Q3_K_M, Q4_0, Q5_1, Q6_K, Q8_0, F16 etc. We'll auto-detect and optimize for your GPU's memory.
                        </span>
                    </div>

                    <div className="text-text flex flex-col min-w-[400px] h-[600px] p-[21px] border-r border-background-5">
                        <span className="text-[20px] tracking-[0px] leading-none font-normal text-text-3 mb-[15px]">03</span>
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">Model-Aware Runtime</span>
                        <span className="flex flex-1 items-center justify-center">
                            <ComplexIcon className="h-[100px]" />
                        </span>
                        <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                            We parse the model type, token limits, quantization, and context size, and set the best parameters out of the box.
                        </span>

                    </div>

                    <div className="text-text flex flex-col min-w-[400px] h-[600px] p-[21px]">
                        <span className="text-[20px] tracking-[0px] leading-none font-normal text-text-3 mb-[15px]">04</span>
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">GGUF Native</span>
                        <span className="flex flex-1 items-center justify-center">
                            <ChatCircleIcon className="h-[100px]" />
                        </span>
                        <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                            {""} <br />
                            Powered by llama.cpp under the hood, no container setup, no CLI wrangling. Just deploy.
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default SixthSection
