import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    display: flex;
    border: 1px dodgerblue solid;
    justify-content: space-between;
    row-gap: 2em;
    flex-wrap: wrap;
    padding: 2em 10em;
`

export const Icon = styled.div`
    margin: .5em 1em 0 0;
    font-size: 1.125rem;
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
        margin-top: 1em;
        width: 300px;
    }

    input::placeholder {
        color: ${props => props.theme.text};
    }
`
export const Text = styled.p`
    background: ${props => props.theme.element};;
    color: ${props => props.theme.text};
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0 2em;
    
`
export const DropDown = styled.ul`
    background: ${props => props.theme.element};;
    color: ${props => props.theme.text};
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0 5em;
    list-style-type: none;
    margin: 0;
    /* padding: 0; */
    z-index: 9;
    position: absolute;
    top: 75px;
    right: 15px;
    
    
    li {
        margin-bottom: .5em;
    }
`

export const Group = styled.div`
    display: flex;
    /* box-sizing: unset; */
    background: ${props => props.theme.element};
    padding: .5em 2em;
    /* justify-content: center; */
    align-content: center;
    border-radius: 5px;
    min-height: 50px;
    position: relative;
`