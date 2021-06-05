import React from 'react'
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer( {children}) {
    const country1 = 'ABC'
    const country2 = 'XYZ'

    return (
        <Header>
            <Header.Text>This is the header container</Header.Text>
            
            <Header.Text>{children}</Header.Text>
            <Header.Title to={ROUTES.FEATURED} >Where in the world?</Header.Title>
            <Header.Title to={`${ROUTES.FEATURED}/${country1}`} >ABC</Header.Title>
            <Header.Title to={`${ROUTES.FEATURED}/${country2}`} >XYZ</Header.Title>
    
        </Header>
    )
}
