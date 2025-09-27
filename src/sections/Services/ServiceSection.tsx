import ValuesCard from "../../components/cards/ValuesCard"
import Header from "../../components/sharedComponents/Header"
import Container from "../../layouts/Container"
import type { PromotionalCard, ServiceCard } from "../../types/Services/ServicesTypes"

interface Props {
    data: ServiceCard[],
    title: string,
    description: string,
    data1: PromotionalCard,
    investSection?: boolean
}

const ServiceSection = ({title, description, data , data1, investSection} : Props) => {
  return (
    <Container className={`${investSection ? "lg:flex-row " : ""}`}>
        <div className={`${investSection ? "flex flex-col gap-7.5 md:gap-10 xl:gap-12.5 w-full lg:w-[28.6112vw] xl:w-[27.03125vw]" : "w-full lg:w-[67.5vw]"}`}>            
            {investSection ? <Header title={title} description={description} withIcon textVW hash={title.replaceAll(" ", "_").replaceAll(",","")} />  
                           : <Header title={title} description={description} withIcon hash={title.replaceAll(" ", "_").replaceAll(",","").toLowerCase()} />}
            {investSection && <ValuesCard withButton title={data1?.title} description={data1?.description} link={data1?.link} smartSection data-aos="fade-up"/>}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 
            ${investSection ? 'gap-2.5 h-fit p-2.5 rounded-xl bg-Grey-10 flex-1 my-auto' : 'gap-5 xl:gap-7.5 lg:grid-cols-3'}`}>
            {data.map((item: ServiceCard, index: number) => (
                <ValuesCard key={index} withIcon iconURL={item.icon} title={item.title} description={item.description} 
                data-aos="zoom-out"
                data-aos-delay={index * 100}
                /> 
            ))}
            {!investSection && <ValuesCard withButton title={data1?.title} description={data1?.description} link={data1?.link} className="md:col-span-2" smartSection={investSection} data-aos="fade-up"/>}
        </div>
    </Container>
  )
}

export default ServiceSection
