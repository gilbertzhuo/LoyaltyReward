import React from 'react';
import { Container, ContainerInfo} from "./heroElements"
import data from "./data.json"

function HeroSection() {
    return (
        <Container>
            <ContainerInfo>
                <h1>{data.Section.title}</h1>
                <p>{data.Section.description}</p>
            </ContainerInfo>
        
        </Container>
    )
}

export default HeroSection;