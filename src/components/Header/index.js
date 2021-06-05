import React from 'react'
import { Container, Text, Title } from './styles/Header'
import { Link as ReachRouterLink } from 'react-router-dom';

export default function Header({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Header.Text = function HeaderText({children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}

Header.Title = function HeaderTitle({ to, children, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <Title {...restProps}>{children}</Title>
        </ReachRouterLink>
    )

}