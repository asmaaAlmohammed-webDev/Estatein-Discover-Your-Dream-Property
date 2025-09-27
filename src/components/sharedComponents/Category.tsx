// Type for category props
interface CategoryProps {
    subTitle:string,
    title:string,
}

function Category({subTitle,title}:CategoryProps) {
    return (
        <div className="gap-1 md:gap-1.5 xl:gap-2 ">
            <span className="flex text-Grey-60 gap-0.5 md:gap-1 xl:gap-1.5 text-xs md:text-sm xl:text-lg font-medium items-center urbanist"><img src="/assets/icons/category.svg" alt="" />{subTitle}</span>
            <p className="font-medium text-sm md:text-base xl:text-xl text-White urbanist">{title}</p>
        </div>
    )
}

export default Category
