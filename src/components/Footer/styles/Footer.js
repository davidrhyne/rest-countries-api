import styled from 'styled-components';


export const Container = styled.div`
    background: ${props => props.isDarkTheme ? "darkgrey" : "dodgerblue"};
`

export const Text = styled.p`
    color: ${props => props.isDarkTheme ? "white" : "yellow"};
`