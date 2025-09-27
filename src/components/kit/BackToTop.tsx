import { useEffect, useState } from "react"
import TopArrow from "../../svg/TopArrow"


function BackToTop() {
    const [show ,setShow] =useState<boolean>(false);
    useEffect(() =>{
        const buttonShow = () =>{
            if (window.scrollY > 300) {
            setShow(true);
        } else {
            setShow(false);
        }
        }
        window.addEventListener("scroll", buttonShow);
        return () => window.removeEventListener("scroll", buttonShow);
    })

    const scrollTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };
    return (
        <div onClick={() => scrollTop()} className= {`flex flex-col justify-center items-center w-fit group gap-2 
            transition-all ease-in-out duration-500 transform fixed bottom-6 right-6 z-50 ${
        show ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
        }`} >
            <button  className="BackToTop 
                w-14.5 h-14.5 rounded-full bg-Grey-15 group-hover:bg-Purple-60 
                flex items-center justify-center font-semibold drop-shadow-[0_0_6px_#a685fa] 
                transition-all duration-300  overflow-hidden   
                ">
                <TopArrow className=" transition-transform duration-300 arrow group-hover:text-white"/>
                
            </button>
            <span
                className="font-bold opacity-0 group-hover:opacity-100 translate-y-2 transition-all duration-300 ease group-hover:translate-y-0">Back To Top</span>
        </div>
    )
}

export default BackToTop
