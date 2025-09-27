import { useState } from "react"
import type { MeetEstateinTeamCard } from "../../types/About/AboutType"
import CardImage from "../sharedComponents/CardImage"

const OurTeamCard = ({item ,...aos} : {item: MeetEstateinTeamCard}) => {
  const [float, setFloat] = useState (false)
  return (
    <div className="p-5 lg:p-6 xl:p-7.5 border border-Grey-15 rounded-xl flex flex-col gap-10 lg:gap-12.5" {...aos}>
     <div className="relative">
         <CardImage src={item.image} alt={item.id} height="h-[68.7179vw] md:h-[30vw] lg:h-[15.2778vw] xl:h-[13.1770834vw]" className1 />
         <button className="absolute -bottom-5 xl:-bottom-6.5 left-1/2 -translate-x-1/2 rounded-[43px] py-2.5 px-5 xl:py-3.5 xl:px-6.5 bg-Purple-60 cursor-pointer"><img src="/assets/icons/twitterIcon.svg" className="w-5 h-5 xl:w-6 xl:h-6" alt="social media icon" /></button>
     </div>
      <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 flex-1">
        <div className="flex flex-col gap-0.5 lg:gap-1 xl:gap-1.5">
          <h3 className="text-lg/[28px] md:text-xl/[28px] xl:text-2xl/[28px] font-semibold text-center">{item.name}</h3>
          <p className="text-sm/[24px] md:text-base/[24px] xl:text-lg/[24px] font-medium text-Grey-60 text-center">{item.job}</p>
        </div>
        <div className="relative mt-auto">
          <input type="text" placeholder=" " onFocus={() => setFloat(true)} onBlur={() => setFloat(false)} id={item.id} className="peer w-full min-h-16 md:min-h-14 xl:min-h-18 rounded-full py-2 pl-6 pr-2 md:py-2.5 md:pl-5 md:pr-2.5 xl:py-3.5 xl:pl-6 xl:pr-3.5 text-sm/[28px] md:text-base/[28px] xl:text-lg/[28px] bg-Grey-10 border border-Grey-15 placeholder:text-White focus:outline-none" />
          <label htmlFor={item.id} className="py-2 pr-2 pl-6 lg:py-2.5 lg:pl-5 lg:pr-2.5 xl:py-3.5 xl:pr-3.5 xl:pl-6 font-medium text-sm/[28px] md:text-base/[28px] xl:text-lg/[28px] absolute left-2 md:left-2.5 xl:left-3.5 top-1/2 -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:left-2 md:peer-placeholder-shown:left-2.5 lg:peer-placeholder-shown:left-[0.69445vw] xl:peer-placeholder-shown:left-3.5 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm/[28px] md:peer-placeholder-shown:text-base/[28px] xl:peer-placeholder-shown:text-lg/[28px] peer-focus:top-0 peer-focus:left-4 md:peer-focus:left-4.5 xl:peer-focus:left-6 peer-focus:text-sm lg:peer-focus:text-base xl:peer-focus:text-lg peer-focus:text-White">{float ? "Message" : "Say Hello👋"}</label>
          <button className="absolute right-2 lg:right-2.5 xl:right-3.5 top-1/2 -translate-y-1/2 rounded-full p-3.5 lg:p-2 xl:p-2.5 bg-Purple-60 cursor-pointer">
          <img src="/assets/icons/telegram.svg" alt="send icon" 
          className="w-5 h-5 xl:w-6 xl:h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default OurTeamCard
