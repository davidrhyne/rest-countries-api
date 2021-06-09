import styled from 'styled-components';


export const Container = styled.div`
    background: ${props => props.theme.element};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1em 0;
    border: 1px magenta solid;
    align-items: center;
`

export const Text = styled.div`
    color: ${props => props.theme.text};
    font-size: 800;
    padding-bottom: 1em;

    a {
        text-decoration: none ;
        color: ${props => props.theme.background};
        background: ${props => props.theme.text};
        padding: .1em .3em;
        border-radius: 10px;
    }

    a:hover, 
    a:focus {
        background: ${props => props.theme.element};
        color: ${props => props.theme.text};
        border: 1px solid ${props => props.theme.text};
    }
`