import Button from "../sharedComponents/Button"
import Category from "../sharedComponents/Category"
// Data Type for small card inside subCard
interface SubCard {
    subTitle: string      
    title: string         
}
// Type for the data prop
interface ValuedClientsData {
    date: string          
    title: string         
    subCards: SubCard[]   
    whatSay: string       
    say: string 
    btnText:string
    btnLink:string
}
function ValuedClientsCard({date,title,subCards,whatSay,say,btnText,btnLink}:ValuedClientsData) {
    return (
        <div className=" w-full border border-Grey-15 p-6 md:p-10 xl:p-12.5 rounded-[10px] md:rounded-xl 
        flex flex-col gap-7.5 xl:gap-10 justify-between m-0 shadow-[0_0_0_6px_var(--color-Grey-10)] md:shadow-[0_0_0_8px_var(--color-Grey-10)]">
            <div className="flex flex-col lg:flex-row justify-between gap-y-5 ">
                <div className="flex flex-col gap-0.5 md:gap-1 xl:gap-1.5">
                    <span className="text-sm md:text-base xl:text-lg font-medium text-Grey-60 urbanist">{date}</span>
                    <h3 className="font-semibold text-xl md:text-2xl xl:text-3xl text-White urbanist">{title}</h3>
                </div>
                <Button link={btnLink} content={btnText} withBorder className={"bg-Grey-10 w-full md:w-fit"}/>
            </div>
            <div className="flex gap-4 md:gap-5 xl:gap-7.5">
                {subCards.map((item, index) => (
                <div key={index} className={`${index === 0 ? '' : 'border-l border-Grey-15 pl-4 md:pl-5 xl:p-7,5'} w-[45.5456%]`} >
                    <Category subTitle={item.subTitle} title={item.title}/>
                </div>
            ))}
            </div>
            
            <div className="border border-Grey-15 p-5 md:p-6 xl:p-7.5 rounded-xl flex flex-col gap-2 md:gap-2.5 xl:gap-3.5">
                <span className="text-sm md:text-base xl:text-lg text-Grey-60 urbanist">{whatSay}</span>
                <p className="text-sm md:text-base xl:text-lg urbanist">{say}</p>
            </div>
        </div>
    )
}

export default ValuedClientsCard
