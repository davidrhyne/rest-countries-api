import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.element};
    display: flex;
    justify-content: space-between;
    padding: 2em 1em;
    border: 1px magenta solid;
    align-items: center;
`

export const Text = styled.div`
    color: ${props => props.theme.text};
    border: 1px limegreen solid;
    font-weight: 600;
    cursor: pointer;

    span {
        margin-left: .5em;
        font-family: 'Nunito Sans', sans-serif;
        font-size: .75rem;
    }
`

export const Title = styled.div`
    color: ${props => props.theme.text};
    font-size: 800;
    border: 1px yellow solid;
`