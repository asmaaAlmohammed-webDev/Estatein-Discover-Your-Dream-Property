import Container from '../../layouts/Container'
import OurTeamCard from '../../components/cards/OurTeamCard'
import Header from '../../components/sharedComponents/Header'
import type { MeetEstateinTeamCard, MeetEstateinTeamCardSectionType } from '../../types/About/AboutType'

const OurTeam = ({data}:{data:MeetEstateinTeamCardSectionType}) => {
  return (
    <Container>
        <Header hash='team' title={data.headline} description={data.description} withIcon />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-7.5'>
            {data.properties.map((item: MeetEstateinTeamCard, index) => (
            <OurTeamCard key={index} item={item} 
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            />
        ))}
        </div>
    </Container>
  )
}

export default OurTeam
