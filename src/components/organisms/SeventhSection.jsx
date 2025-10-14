import MicroShipIcon from "@/assets/icons/MicroShipIcon"
import ButtonFirstVariation from "../atoms/ButtonFirstVariation"

const SeventhSection = () => {
    return (
        <div className="flex w-full mt-[100px] px-[116px] justify-between flex-col items-center">
            <span className="flex h-[16px] items-center gap-[6px] mb-[25px]">
                <MicroShipIcon />
                <span className="text-[14px] font-normal tracking-normal leading-none text-text-3 ">
                    QUICK DEPOLY</span>
            </span>
            <span className="items-center font-semibold text-[36px] text-text tracking-normal leading-tight text-center mb-[70px] ">
                Instantly {" "}
                <span className="text-text-3">
                    Run GGUF Models <br />
                </span>
                from {" "}
                <span className="text-text-3">
                    Hugging Face
                </span>
            </span>

            <div className="flex items-center mb-[25px] gap-[20px]">
                <span className="text-text font-normal text-[16px] leading-[100%] tracking-[0px]">
                    Paste Hugging Face GGUF Model Repo
                </span>
                <span className="text-text-3 border-[1px] border-background-5 rounded-xl text-[15px] px-[14px] py-[16px] leading-none">
                    hf.co/TheBloke/Mixtral-8x7B-Instruct-v0.1-GGUF
                </span>
            </div>
            <ButtonFirstVariation firstClassName="font-normal text-text rounded-full bg-brand p-[2px]"
          secondClassName="flex brandGradient py-[16.5px] px-[20px] rounded-full font-normal text-[16px] tracking-[0px] whitespace-nowrap leading-none" style={{ boxShadow: "0px 0px 10px 1.5px rgba(65, 134, 231, 0.3)"}} title="Deploy To My GPU" />

        </div>
    )
}

export default SeventhSection
