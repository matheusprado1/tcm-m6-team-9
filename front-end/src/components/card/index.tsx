import { useState } from "react";
import {
    CardFooter,
    Container,
    ContainerTags,
    Description,
    Figure,
    Price,
    Title,
    Feat,
} from "./styles";

interface CardProps {
    title: string;
    description: string;
    price: number;
    km: number;
    year: number;
    image: string;
    isActive: boolean;
}

export function Card({
    description,
    km,
    title,
    price,
    year,
    image,
}: CardProps): JSX.Element {
    // const [isActive, setIsActive] = useState<boolean>(false);
    return (
        <Container>
            <Figure>
                <img src={image} alt={title} />
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <CardFooter>
                <ContainerTags>
                    <Feat>{km} KM</Feat>
                    <Feat>{year}</Feat>
                </ContainerTags>
                <Price>R$ {price},00</Price>
            </CardFooter>
        </Container>
    );
}
