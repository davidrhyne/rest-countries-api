import React from 'react'
import { Container, Icon, InputField, DropDown, Group } from './styles/Input'

export default function Input({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Input.Icon = function InputIcon({children, ...restProps}) {
    return <Icon {...restProps}>{children}</Icon>
}

Input.InputField = function InputInputField({ to, children, ...restProps}) {
    return (
            <InputField {...restProps}>{children}</InputField>
    )

}

Input.DropDown = function InputDropDown({ to, children, ...restProps}) {
    return (
            <DropDown {...restProps}>{children}</DropDown>
    )

}

Input.Group = function InputGroup({ to, children, ...restProps}) {
    return (
            <Group {...restProps}>{children}</Group>
    )

}