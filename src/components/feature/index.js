import React from 'react'
import { Container, Button, Image, Title, Label, Text  } from './styles/Feature'

export default function Feature({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}


Feature.Button = function FeatureButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Feature.Image = function FeatureImage({ ...restProps}) {
    return <Image {...restProps} />
}




Feature.Title = function FeatureTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}



Feature.Label = function FeatureLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}



Feature.Text = function FeatureText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}
