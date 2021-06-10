import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    display: flex;
    border: 1px dodgerblue solid;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2em 10em;
`

export const Icon = styled.div`
    margin-right: 1em;
`

export const InputField = styled.div`
    background: ${props => props.theme.element};
    color: ${props => props.theme.text};
    outline: none;
    padding: 0 3em 0 0;

    input {
        background: ${props => props.theme.element};
        color: ${props => props.theme.text};
        border: none;
        outline: none;
        
    }

    input::placeholder {
        color: ${props => props.theme.text};
    }
`

export const DropDown = styled.select`
    background: ${props => props.theme.element};;
    color: ${props => props.theme.text};
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0 2em;

`

export const Group = styled.div`
    display: flex;
    background: ${props => props.theme.element};
    padding: 1.5em 2em;
    border-radius: 5px;
`