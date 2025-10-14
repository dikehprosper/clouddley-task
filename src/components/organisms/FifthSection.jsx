import ArrowRightIcon from "@/assets/icons/ArrowRightIcon"
import LayersIcon from "@/assets/icons/LayersIcon"
import MetaImg from "@/assets/images/Meta.png"
import DeepseekImg from "@/assets/images/Deepseek.png"
import MistralImg from "@/assets/images/Mistral.png"
import GemmaImg from "@/assets/images/Gemma.png"
import MicrosoftImg from "@/assets/images/Microsoft.png"

const FifthSection = () => {
    return (
        <div className="flex w-full mt-[100px] px-[116px] justify-between flex-col items-center">
            <span className="flex h-[16px] items-center gap-[6px] mb-[25px]">
                <LayersIcon className="text-text-3" /> <span className="text-[14px] font-normal tracking-normal leading-none text-text-3 ">INTEGRATIONS</span>
            </span>
            <span className="items-center font-semibold text-[36px] text-text tracking-normal leading-tight text-center mb-[10px] ">
                Open-Source Models{' '}
                <span className="text-text-3">
                    at <br /> Your
                </span>{' '}
                Fingertips
            </span>

            <span className="text-[22px] tracking-[0px] leading-[100%] font-normal text-text-3 mb-[70px] text-center">
                Pick from leading LLMs — ready to fine-tune, deploy, and chat <br /> with. No setup required beyond connecting your GPU.</span>


            <div className="flex w-full flex-col bg-background-1 border-[1.2px] border-background-2 p-[15px]">
                <div className="flex w-full justify-between border-[.8px] border-background-5">
                    <div className="text-text flex flex-col flex-1 w-1/3 h-[550px] p-[21px] border-r border-background-5">
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">LLaMA 3</span>

                        <span className="flex flex-1 items-center justify-center">
                            <img src={MetaImg} alt="MetaImg" className="h-[100px] object-contain" />
                        </span>

                        <span className="flex flex-col gap-[30px]">
                            <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                                Meta’s powerful open-weight foundation model.
                            </span>
                            <span className="flex justify-end items-center leading-none text-[18px] text-text">
                                Deploy &nbsp; <ArrowRightIcon className="w-[19px] h-[12px]" />
                            </span>
                        </span>
                    </div>

                    <div className="text-text flex flex-col flex-1 w-1/3 h-[550px] p-[21px] border-r border-background-5">
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">DeepSeek-VL</span>

                        <span className="flex flex-1 items-center justify-center">
                            <img src={DeepseekImg} alt="DeepseekImg" className="h-[64px] object-contain" />
                        </span>

                        <span className="flex flex-col gap-[30px]">
                            <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                                Multimodal model capable of vision + language tasks.
                            </span>
                            <span className="flex justify-end items-center leading-none text-[18px] text-text">
                                Deploy &nbsp; <ArrowRightIcon className="w-[19px] h-[12px]" />
                            </span>
                        </span>
                    </div>

                    <div className="text-text flex flex-col flex-1 w-1/3 h-[550px] p-[21px]">
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">Mistral 7B</span>

                        <span className="flex flex-1 items-center justify-center">
                            <img src={MistralImg} alt="MistralImg" className="h-[100px] object-contain" />
                        </span>

                        <span className="flex flex-col gap-[30px]">
                            <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                                Fast and efficient decoder-only model.
                            </span>
                            <span className="flex justify-end items-center leading-none text-[18px] text-text">
                                Deploy &nbsp; <ArrowRightIcon className="w-[19px] h-[12px]" />
                            </span>
                        </span>
                    </div>
                </div>


                <div className="flex w-full justify-between border-[.8px] border-background-5">
                    <div className="text-text flex flex-col flex-1 w-1/3 h-[600px] p-[21px] border-r border-background-5">
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">Mistral</span>

                        <span className="flex flex-1 items-center justify-center">
                            <img src={MistralImg} alt="MistralImg" className="h-[100px] object-contain" />
                        </span>

                        <span className="flex flex-col gap-[30px]">
                            <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                                Mixture-of-experts model with strong performance.
                            </span>
                            <span className="flex justify-end items-center leading-none text-[18px] text-text">
                                Deploy &nbsp; <ArrowRightIcon className="w-[19px] h-[12px]" />
                            </span>
                        </span>
                    </div>

                    <div className="text-text flex flex-col flex-1 w-1/3 h-[600px] p-[21px] border-r border-background-5">
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">Gemma</span>

                        <span className="flex flex-1 items-center justify-center">
                            <img src={GemmaImg} alt="GemmaImg" className="h-[64px] object-contain" />
                        </span>

                        <span className="flex flex-col gap-[30px]">
                            <span className="text-[20px] font-normal text-text leading-tight tracking-[0px]">
                                Google’s instruction-tuned LLM with great reasoning.
                            </span>
                            <span className="flex justify-end items-center leading-none text-[18px] text-text">
                                Deploy &nbsp; <ArrowRightIcon className="w-[19px] h-[12px]" />
                            </span>
                        </span>
                    </div>



                    <div className="text-text flex flex-col flex-1 w-1/3 h-[600px] p-[21px]">
                        <span className="text-[20px] tracking-normal font-normal text-text mb-[15px] leading-none">Phi-3</span>

                        <span className="flex flex-1 items-center justify-center">
                            <img src={MicrosoftImg} alt="MicrosoftImg" className="h-[100px] object-contain" />
                        </span>

                        <span className="flex flex-col gap-[30px]">
                            <span className="text-[20px] font-normal text-text leading-tight tracking-tight">
                                Microsoft’s small but powerful transformer for tight environments.
                            </span>
                            <span className="flex justify-end items-center leading-none text-[18px] text-text">
                                Deploy &nbsp; <ArrowRightIcon className="w-[19px] h-[12px]" />
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection
