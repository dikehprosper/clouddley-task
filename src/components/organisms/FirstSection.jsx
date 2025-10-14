import { ChevronRight } from 'lucide-react'
const ClouddleyAiIcon = '/images/ClouddleyAiIcon.png'
const BackgroundImage = '/images/BackgroundImage.png'
import AnimatedHighlights from './AnimatedHighlights';
import DisplayCard from '../molucules/DisplayCard';
import ButtonFirstVariation from '../atoms/ButtonFirstVariation';

const FirstSection = () => {
    return (
        <div className="relative flex w-full mt-[190px] px-[131px] justify-between">
            <img src={BackgroundImage} alt="BackgroundImage" className='absolute top-[-142px] left-[210px] right-[100px] w-[1100px] z-[-1]' />

            <div className="flex py-[63.5px]">
                <div className="flex flex-col items-start">
                    <span className="flex items-center px-[15.5px] py-2 bg-text/5 gap-[5px] rounded-full btn">
                        <span className="text-text-2 text-[13px] font-medium tracking-tight ">
                            Clouddley AI
                        </span>
                        <img
                            src={ClouddleyAiIcon}
                            alt="clouddleyAiIcon"
                            className="h-[18.33px] w-[18.33px]"
                        />
                    </span>
                    <span className="text-[50px] font-bold  mt-[20px] text-text-3  leading-[100%] tracking-[0px] align-middle whitespace-nowrap">
                        Power Your Own <br />
                        <span className="inline text-text">GPU</span> into a Private <br />
                        <span className="inline text-text">AI Supernode</span>
                    </span>
                    <span className='text-[22px] font-normal leading-[100%] tracking-[0px] align-middle text-text-3 mt-[20px] whitespace-nowrap'>Run open source models, Fine Tune them on your <br /> own hardware, and chat with them via OpenAI- <br /> compatible APIs. Your machine. Your control.</span>
                    <div className='mt-[30px] flex gap-[20px] items-center'>
                        <ButtonFirstVariation firstClassName="font-normal text-text rounded-full bg-brand p-[2px]" secondClassName="flex brandGradient py-[16.5px] px-[20px] rounded-full font-normal text-[16px] tracking-[0px]  whitespace-nowrap leading-none" style={{ boxShadow: "0px 0px 10px 1.5px rgba(65, 134, 231, 0.3)" }}  title="Connect Your GPU" />
                        <span className='flex text-text text-[16px] font-[400] tracking-normal leading-[130%] tracking-[0px]  whitespace-nowrap'> See How It Works <ChevronRight className='h-[24px] w-[24px] ml-[5px]' /> </span>
                    </div>
                    <AnimatedHighlights />
                </div>
            </div>
          <DisplayCard />
        </div>
    )
}

export default FirstSection
