import React from 'react'
import { Container, Group, Image, Label, Text, Title } from './styles/Card'



export default function Card({ children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
// outer container for all cards
Card.Group = function FooterText({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}

Card.Image = function CardImage({ ...restProps }) {
    return <Image {...restProps} />;
}

Card.Label = function CardLabel({children, ...restProps}) {
    return <Label {...restProps} >{children}</Label>
}

Card.Text = function CardText({children, ...restProps}) {
    return <Text {...restProps} >{children}</Text>
}

Card.Title = function CardTitle({children, ...restProps}) {
    return <Title {...restProps} >{children}</Title>
}