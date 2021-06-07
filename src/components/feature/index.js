import React from 'react'
import { Container, Text } from './styles/Feature'

export default function Feature({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Feature.Text = function FeatureText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}