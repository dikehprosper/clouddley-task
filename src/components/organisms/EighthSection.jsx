import GridGraphicBackground from "@/assets/images/GridGraphicBackground.png"
import { ChevronRight } from "lucide-react"
import ButtonFirstVariation from "../atoms/ButtonFirstVariation"

const EightSection = () => {
  return (
    <div className="relative flex w-full mt-[100px] px-[116px] justify-between flex-col items-center mb-[124px] glow-section">
      <img src={GridGraphicBackground} alt="GridGraphicBackground" className="absolute top-0 right-0 left-0 z-[-1]" />
      <span className="items-center mt-[44px] font-semibold text-[36px] text-text tracking-normal leading-tight text-center mb-[30px] ">
        Build Faster. Smarter. Privately
      </span>
      <span className="text-[22px] text-text-3 text-center font-normal rounded-full leading-[100%] tracking-[0px] mb-[30px]">
        Skip the GPU queues. Keep full control. <br /> Run your models your way.
      </span>
      <div className='flex gap-[20px] items-center'>
        <ButtonFirstVariation firstClassName="font-normal text-text rounded-full bg-brand p-[2px]"
          secondClassName="flex brandGradient py-[16.5px] px-[20px] rounded-full font-normal text-[16px] tracking-[0px]  whitespace-nowrap leading-none" style={{ boxShadow: "0px 0px 10px 1.5px rgba(65, 134, 231, 0.3)" }} title="Connect Your GPU" />
        <span className='flex text-text text-[16px] font-[400] tracking-normal leading-[130%] tracking-[0px] whitespace-nowrap'> See Documentation <ChevronRight className='h-[24px] w-[24px] ml-[5px]' /> </span>
      </div>
    </div>
  )
}

export default EightSection