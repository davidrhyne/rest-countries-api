import styled from 'styled-components';

export const Container = styled.div`
    font-size: .75rem;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    display: flex;
    justify-content: space-between;        
    flex-wrap: wrap;
    row-gap: 2.5em;
    padding: 2em 1em;
    margin: 0 auto;

    @media (min-width: 700px) {
        padding: 2em 7em;
        font-size: .875rem;
    }

    @media (min-width: 1500px) {
        padding: 2em 10%;     
    }
`

export const Icon = styled.div`
    font-size: 1rem;
    margin: .7em 1em 0 0;    

    @media (min-width: 700px) {
        font-size: 1.125rem;
    }
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
        width: 100%;

        @media (min-width: 700px) {
            width: 300px;
        }
    }

    input::placeholder {
        color: ${props => props.theme.text};
    }
`
export const Text = styled.p`    
    background: ${props => props.theme.element};
    color: ${props => props.theme.text};    
    outline: none;
    border: none;
    padding: 0;
    text-align: left;
    margin-right: 3em;
    cursor: pointer;    
`
export const DropDown = styled.ul`
    background: ${props => props.theme.element};
    color: ${props => props.theme.text};
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 1em 1.2em 1em 2em;
    list-style-type: none;
    z-index: 9;
    position: absolute;
    
    top: 50px;
    right: 0px; 

    transition: 250ms all;   
    transition-delay: 250ms; 
    
    li {
        margin-bottom: .5em;
        width: 150px;
        
        @media (max-width: 700px) {
            width: 90px;
        }
    }

    li:hover {
        box-shadow: 0px 2px 0px 0px ${props => props.theme.textInput};
        /* transition: 200ms; */
    }

    @media (min-width: 700px) {
        padding: 1em 3em 1em 2em;
        top: 55px;
        right: 0; 
    }
`

export const Group = styled.div`
    display: flex;

    background: ${props => props.theme.element};
    padding: .5em 1em .5em 2em;

    align-content: center;
    border-radius: 5px;
    min-height: 43px;
    position: relative;
    /* transition-delay: 250ms;  */

    ${props => props.searchField && `
        width: 100%;

        @media (min-width: 500px) {
            width: 80%;
        }

        @media (min-width: 700px) {
            width: unset;
            margin-right: 2em;
        }
    `} 

    ${props => props.dropDown && `
        cursor: pointer;
    `} 

    /* &:hover {        
        box-shadow: 0 0 0 2px ${props => props.theme.text};
        transition-delay: 0s;
    }   

    &:hover > ul {
        box-shadow: 0 0 0 2px ${props => props.theme.text};
                
    } */
`