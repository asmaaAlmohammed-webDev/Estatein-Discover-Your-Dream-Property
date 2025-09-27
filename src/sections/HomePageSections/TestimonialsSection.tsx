import Clients from "../../components/cards/ClientsCard"
import Header from "../../components/sharedComponents/Header"
import Slider from "../../components/sharedComponents/Slider"
import Container from "../../layouts/Container"
import type { Testimonial, TestimonialsSectionType } from "../../types/Home/HomeTypes"

const TestimonialsSection = ({data} : {data:TestimonialsSectionType}) => {
  return (
    <Container>
        <Header
        hash="testimonials"
        title={data.headline}
        description={data.description}
        withBtn
        withIcon
        btnContent={data.button.text}
        link={data.button.link}/>
        <Slider
          withBtn
          btnContent={data.button.text}
          link={data.button.link}
          cards={data.testimonials.map((testimonial: Testimonial) => (
            <Clients testimonial={testimonial} />
        ))}
      />
    </Container>
  )
}

export default TestimonialsSection