import PropertiesCard from "../../components/cards/PropertiesCard"
import Header from "../../components/sharedComponents/Header"
import Slider from "../../components/sharedComponents/Slider"
import Container from "../../layouts/Container"
import type { PropertySliderSection } from "../../types/Properties/PropertiesTypes"

function PropertiesSection({data}:{data:PropertySliderSection}) {
    return (
        <Container>
            <Header
                hash="properties-portfolio"
                title={data.sectionTitle}
                description={data.sectionDescription}
                withIcon
            />
            <Slider
                cards={data.cards.map((property) => (
                    <PropertiesCard
                        image={property.image}
                        title={property.mainTitle}
                        fullDescription={property.description}
                        price={property.price}
                        discoverDescription={property.smallTitle}
                        showInfo={false}
                        btnLink={property.button.link}
                        btnText={property.button.text}
                    />
                ))}
            />
        </Container>
    )
}

export default PropertiesSection
