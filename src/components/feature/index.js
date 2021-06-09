import React from 'react'
import { 
    Container,
    Button, 
    ButtonBack, 
    Image, 
    Title,
    Section, 
    SubSection,
    Label, 
    Text, 
    Spacer,
    GroupHeading, 
    Group 
    } from './styles/Feature'


export default function Feature({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Feature.Button = function FeatureButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}

Feature.ButtonBack = function FeatureButtonBack({children, ...restProps}) {
    return <ButtonBack {...restProps}>{children}</ButtonBack>
}

Feature.Image = function FeatureImage({ ...restProps}) {
    return <Image {...restProps} />
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Feature.Section = function FeatureSection({children, ...restProps}) {
    return <Section {...restProps}>{children}</Section>
}

Feature.SubSection = function FeatureSubSection({children, ...restProps}) {
    return <SubSection {...restProps}>{children}</SubSection>
}

Feature.Label = function FeatureLabel({children, ...restProps}) {
    return <Label {...restProps}>{children}</Label>
}

Feature.Text = function FeatureText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Feature.Spacer = function FeatureSpacer({children, ...restProps}) {
    return <Spacer {...restProps}>{children}</Spacer>
}

Feature.GroupHeading = function FeatureGroupHeading({children, ...restProps}) {
    return <GroupHeading {...restProps}>{children}</GroupHeading>
}

Feature.Group = function FeatureGroup({children, ...restProps}) {
    return <Group {...restProps}>{children}</Group>
}