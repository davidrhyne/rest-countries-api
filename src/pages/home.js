import React from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'

export default function Home() {
    return (
        <div>
            <HeaderContainer>
                <p>this is body of the header</p>
            </HeaderContainer>
            <h3>this is the home page</h3>
            <FooterContainer>
                <p>this is body of the Footer</p>
            </FooterContainer>
        </div>
    )
}
