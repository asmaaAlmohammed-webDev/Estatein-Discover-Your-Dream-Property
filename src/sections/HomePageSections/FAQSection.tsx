import Header from '../../components/sharedComponents/Header'
import Container from '../../layouts/Container'
import Slider from '../../components/sharedComponents/Slider'
import FAQCard from '../../components/cards/FAQCard'
import type { FaqSectionType } from '../../types/Home/HomeTypes'

const FAQSection = ({data}:{data:FaqSectionType}) => {
  return (
      <Container >
          <Header
            hash='faqs'
            title={data.headline}
            description={data.description}
            withIcon
            withBtn={true}
            btnContent={data.button.text}
            link={data.button.link}
          />
            <Slider
              withBtn
              btnContent={data.button.text}
              link={data.button.link}
              cards={data.faqs.map((faq) => (
                  <FAQCard faq={faq} showButton={true} withShadow={false} />
              ))}
            />
        </Container>
  )
}

export default FAQSection
