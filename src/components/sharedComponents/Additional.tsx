// data type for the additional component
interface prop{
    title:string,
    price:string,
    desc:string | undefined,
    className:string,
}

function Additional({title,price,desc,className,...aos}:prop) {
    const hasDesc = desc ? true :false;
    return (
        <div className={`flex flex-col gap-2.5 md:gap-3 xl:gap-4 ${className}`} {...aos}>
            <p className="text-Grey-60 text-sm xl:text-lg font-medium urbanist">{title}</p>
            <div className="flex gap-2 items-center lg:flex-wrap">
                <span className=" font-semibold text-lg md:text-xl xl:text-2xl text-White">{price}</span>
                {hasDesc && (
                    <p className="py-1 px-3 md:py-1.5 xl:py-2 xl:px-3.5 border border-Grey-15 rounded-md md:rounded-[28px] bg-Grey-10
                text-Grey-60 text-sm xl:text-lg font-medium w-fit whitespace-normal xl:whitespace-nowrap">{desc}
                </p>
                )}
            </div>
        </div>
    )
}

export default Additional