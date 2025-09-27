import { useEffect, useState } from "react"
import Next from "../../svg/Next";
import Previous from "../../svg/previous";
import Location from "../../svg/Location";
import type { PropertyDetailsType } from "../../types/PropertyDetails/PropertyDetailsTypes";

interface Image{
    image: string
}

function PropertyDetailsSlider({data}:{data:PropertyDetailsType}) {

    const[images,setImages] = useState<Image[]> ([]);
    const[currentIndex,setCurrentIndex]=useState<number>(0);
    // check if screen is mobile
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1024);
    // show 1 or 2 images depending on screen size
    const imagesPerSlide : number = isMobile ? 1 : 2;
    // slice current images to display
    const currentImages :Image[] = images.slice(currentIndex,currentIndex + imagesPerSlide);
    const ImagesData : Image[] = data.PropertyImages ? data.PropertyImages : [];
    const ImageScroll = [...ImagesData,...ImagesData]
    //set images and update on window resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    useEffect(() => {
        setImages(ImagesData);
    }, [ImagesData]);
    // Go to previous slide
    const prev =() => {
        if(currentIndex - imagesPerSlide >= 0){
            setCurrentIndex(currentIndex - imagesPerSlide)
        }
    }
    // Go to next slide
    const next =() => {
        if(currentIndex + imagesPerSlide < images.length){
            setCurrentIndex(currentIndex + imagesPerSlide)
        }
    }
    return (
            <div className="flex flex-col gap-7.5 md:gap-10 xl:gap-12.5 ">
                {/* title and price */}
                <div className="flex  flex-col md:flex-row md:items-center gap-5 gap-y-2 ">
                    <div className=" min-w-max">
                        <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold  text-mainText" data-aos="fade-right">{data.title}</h3>
                    </div>
                    <div className="flex items-center gap-5 w-full md:w-[81.796%]">
                        <p className="flex items-center gap-2 p-2 xl:p-2.5 border border-Grey-10 font-medium text-sm xl:text-lg
                            text-mainText rounded-md 
                            xl:rounded-lg  w-fit md:mr-auto" data-aos="fade-up">
                            <Location/>{data.location}
                        </p>
                        <div className="flex md:flex-col flew-row md:items-start gap-1 items-center" data-aos="fade-left">
                            <span className="text-sm font-medium text-secText xl:text-lg">Price</span>
                            <p className="text-lg font-semibold text-mainText md:text-xl xl:text-2xl">{data.price}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-Grey-10 p-5 md:p-10 xl:p-12.5 flex flex-col gap-5 xl:gap-7.5 rounded-xl border border-Grey-15 ">
                <div className="flex flex-col-reverse md:flex-col gap-5 xl:gap-7.5">
                    {/* Thumbnails */}
                    <div className="overflow-hidden w-full bg-Grey-08 py-2.5 md:py-5 relative rounded-xl" >
                        <div className="absolute left-0 top-0 w-24 h-full z-10 bg-gradient-to-r from-Grey-08  to-transparent" />
                        <div className="absolute right-0 top-0 w-24 h-full z-10 bg-gradient-to-l from-Grey-08 to-transparent" />
                        <div className="flex w-full scroll  md:gap-5 gap-2.5">
                            {ImageScroll.map((img,index) => {
                                return(
                                    <div className="relative "  key={index} >
                                        <img className="w-[67px] h-[41px] min-w-[67px] md:w-[122px] md:h-[74px] md:min-w-[122px] xl:w-[144px] xl:h-[94px] xl:min-w-[144px] xl:rounded-lg rounded-md"src={img.image}/>
                                        {/* Overlay hover effect */}
                                            <div className="absolute top-0 w-full h-full bg-Grey-70 bg-opacity-40 hover:opacity-0 "></div>
                                    </div>
                                )
                            })}
                            
                        </div>
                    </div>
                    {/* Main displayed Images  */}
                    <div className={`flex w-full ${isMobile ? 'flex-col gap-4' : 'justify-between'} gap-4`}>
                        {currentImages.map((img,index) => {
                            return(
                                <img 
                                    key={index} 
                                    src={img.image}
                                    className={`${isMobile ? 'w-full' : 'w-[48.5%]'} xl:h-[583px] md:h-[507px] h-[250px] object-cover rounded-[10px]`}
                                    alt={`Property image ${index + 1}`}
                                    style={{ maxWidth: isMobile ? '100%' : '48.5%' }}
                                />
                            )
                        })}
                    </div>
                </div>
                {/* Slider controls */}
                    <div className="flex justify-between items-center gap-2.5 bg-Grey-08 md:mx-auto p-2.5 rounded-full">
                    <button onClick={prev} className={`w-11 h-11 md:w-14.5 md:h-14.5 md:p-3.5 p-2.5 border border-Grey-15
                    rounded-full flex  justify-center items-center cursor-pointer
                    ${currentIndex === 0 ? 'bg-Grey-08 text-Grey-50': 'bg-Grey-10 '}`}>
                        <Previous/>
                    </button>
                    <div className="flex gap-1">
                        {Array.from({ length: Math.ceil(images.length / imagesPerSlide) }).map((_, i) => {
                            const startIndex = i * imagesPerSlide;
                            const endIndex = startIndex + imagesPerSlide;
                            const isActive = currentIndex >= startIndex && currentIndex < endIndex;
                            
                            return(
                                <span
                                    key={i}
                                    className={`w-[11.7px] h-[3px] md:w-[20px] md:h-[5px] rounded transition-colors duration-200 ${
                                    isActive
                                        ? 'bg-Purple-60'
                                        : 'bg-Grey-30'
                                    }`}
                                ></span>
                            )
                        })}
                    </div>
                    
                    <button onClick={next} 
                        className={`w-11 h-11 md:w-14.5 md:h-14.5 md:p-3.5 p-2.5 border border-Grey-15
                        rounded-full flex  justify-center items-center cursor-pointer
                        ${currentIndex + imagesPerSlide >= images.length ? 'bg-Grey-08 text-Grey-50': 'bg-Grey-10 '}`}>
                        <Next/>
                    </button>
                </div>
                </div>
            </div>
    )
}

export default PropertyDetailsSlider