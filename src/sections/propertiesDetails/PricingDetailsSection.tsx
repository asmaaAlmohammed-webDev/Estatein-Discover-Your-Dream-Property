import Header from "../../components/sharedComponents/Header"

import Container from "../../layouts/Container"
import type { PricingDetailsDataType } from "../../types/PropertyDetails/ComprehensivePricingDetailsTypes"
import PricingDetails from "./PricingDetails"


function PricingDetailsSection({data}:{data:PricingDetailsDataType}) {
    return (
        <Container >
            <Header title={data.headline} description={data.description} 
                withIcon />
            <PricingDetails note={data.note} listingPrice={data.listingPrice} Pricing={data.pricingDetailsCards}/>
        </Container>
    )
}

export default PricingDetailsSection
