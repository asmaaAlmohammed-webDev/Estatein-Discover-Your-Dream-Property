import { useState } from "react"
import type { ReactNode } from "react";
import Button from "../sharedComponents/Button"
import InfoComponent from "../sharedComponents/InfoComponent"
// type for detail InfoComponent
export interface Detail {
    icon?:ReactNode,
    label:string,
}
// props type for the propertiesCard 
interface PropertiesProps {
    showInfo?:boolean,
    details?:Detail[],
    fullDescription:string,
    image:string,
    discoverDescription?:string,
    price:string,
    title:string,
    btnText:string,
    btnLink:string,
}
function PropertiesCard({showInfo,details,fullDescription,image,discoverDescription,price,title,btnText,btnLink}:PropertiesProps) {
    // State to check if the card is flipped or not
    const [flipped, setFlipped] = useState<boolean>(false);
    // clip the card description
    const cut = 70;
    const isLong = fullDescription.length > cut;
    const displayText = isLong ? fullDescription.slice(0, cut) + "..." : fullDescription;
    return (
            <div className=" w-full h-full  bg-Grey-08 border border-Grey-15 p-6 md:p-7.5 xl:p-10 rounded-xl grid  transition-transform duration-700 ease-in-out"
                        style={{
                            perspective:"800px",
                            transformStyle: "preserve-3d",
                            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                            gridTemplateAreas: "front",
                            }}>
                        <div className="flex flex-col  justify-between gap-7.5 h-full" style={{
                                gridArea: "front",
                                gridRow: " 1 / -1",
                                gridColumn: "1 / -1",
                                backfaceVisibility: "hidden",
                                zIndex: flipped ? 1 : 0,
                            }}>
                            <img src={image} alt="" className="w-full h-[210px] md:h-[255px] xl:h-[318px] object-cover rounded-[10px]"/>
                            {!showInfo && (
                                <div className="py-1.5 px-3 xl:py-2 xl:px-3 bg-Grey-10 rounded-[28px] border border-Grey-15 max-w-max">
                                    <p className="text-sm xl:text-lg text-White max-w-max">{discoverDescription}</p>
                                </div>
                            ) }
                            <div>
                                <div >
                                    <h3 className="text-lg md:text-xl xl:text-2xl font-semibold">{title}</h3>
                                    <p className="font-medium text-sm md:text-base xl:text-lg text-Grey-60">
                                        {displayText}
                                        {isLong &&  (
                                            <span
                                            className="font-medium text-sm md:text-base xl:text-lg text-White underline cursor-pointer ml-1"
                                            onClick={() => setFlipped(true)}
                                            >
                                            Read More
                                            </span>
                                        )}
                                    </p>
                                </div>
                                
                            </div>
                            {showInfo && (
                                <div className="flex gap-1.5 xl:gap-2.5 flex-wrap">
                                    {details?.map((detail,index) => (
                                    <InfoComponent
                                        key={index}
                                        icon={detail.icon}
                                        desc={detail.label}
                                        padding="py-1.5 px-3.5 xl:py-2"
                                    />
                                    ))}
                                </div>
                                )}
                            <div className="flex justify-between flex-wrap gap-y-4">
                                <div>
                                    <span className="text-sm xl:text-lg font-medium text-Grey-60" >Price</span>
                                    <p className="font-semibold  text-lg md:text-xl xl:text-2xl">{price}</p>
                                </div>
                                <Button link={btnLink} content={btnText} className="bg-Purple-60"/>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between h-full "
                            style={{
                                gridArea: "front",
                                gridRow: " 1 / -1",
                                gridColumn: "1 / -1",
                                backfaceVisibility: "hidden",
                                transform: "rotateY(180deg)",
                                zIndex: flipped ? 2 : 0,
                            }}>
                            <p className="text-sm md:text-lg font-medium text-White">
                                {fullDescription}
                            </p>
                            <button className="w-full text-white text-sm md:text-base xl:text-[18px] cursor-pointer py-3 px-5 rounded-lg xl:rounded-[10px] bg-Purple-60" onClick={() => setFlipped(false)}>close</button>
                            
                        </div>
            </div>
    )
}

export default PropertiesCard