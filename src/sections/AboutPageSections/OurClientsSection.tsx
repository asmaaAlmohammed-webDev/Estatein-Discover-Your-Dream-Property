import ValuedClientsCard from "../../components/cards/ValuedClientsCard"
import Header from "../../components/sharedComponents/Header"
import Slider from "../../components/sharedComponents/Slider"
import Container from "../../layouts/Container"
import type { OurValuedClientsSectionType } from "../../types/About/AboutType"

function OurClients({data}:{data:OurValuedClientsSectionType}) {
    return (
        <Container>
            <Header
                hash="clients"
                title={data.headline}
                description={data.description}
                withIcon
            />
            <Slider
                withBtn={false}
                num_Of_Cards_in_xl_screen={2}
                cards={data.properties.map((client) => (
                    <ValuedClientsCard
                        date={client.date}
                        title={client.title}
                        subCards={client.subCards}
                        whatSay={client.whatSay}
                        say={client.say}
                        btnText={client.button.text}
                        btnLink={client.button.link}
                    />
                ))}
            />
        </Container>
    )
}

export default OurClients
