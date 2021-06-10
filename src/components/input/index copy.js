import React from 'react'
import { Container, Icon, InputField } from './styles/Header'

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