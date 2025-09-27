import Container from "../../layouts/Container";
import FAQCard from "../../components/cards/FAQCard";
import Header from "../../components/sharedComponents/Header";
import type { OurAchievementsSectionType } from "../../types/About/AboutType";

const OurAchievementsSection = ({data}:{data:OurAchievementsSectionType}) => {
  return (
      <Container >
        <Header
          hash="works"
          title={data.headline}
          description={data.description}
          withIcon
        />
        <div className='flex flex-col lg:flex-row gap-y-5 justify-between'>
          {data.properties.map((item,index) => (
            <FAQCard
              key={index}
              faq={{
                id: item.id,
                question: item.title,
                answer: item.description,
                readMoreLink: "#",
                btnText: ""
              }}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              withShadow={true}
              showButton={false}
            />
        ))}
        </div>
      </Container>
  )
}

export default OurAchievementsSection;
