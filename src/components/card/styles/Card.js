import styled from 'styled-components';

// Container, Group, Image, Label, Text 

export const Container = styled.div`
    background: lightgray;
    /* border: 1px magenta solid; */
    width: 265px;
    background: ${props => props.theme.element};;
    color: ${props => props.theme.text};
    margin: 3em;
    border-radius: 5px;
    
    a {
        text-decoration: none;
    }
`

export const Group = styled.div`
    background: ${props => props.theme.background};;
    color: ${props => props.theme.text};
    border: 1px blue solid;
    display: flex;
    flex-wrap: wrap;
    padding: 2em;
    justify-content: center;
    
`
export const Image = styled.img`
    border: 0;
    width: 100%;
    border-radius: 5px 5px 0 0;
    /* cursor: pointer; */
    height: auto;
    /* padding: 0;
    margin: 0; */
`
export const Label = styled.div`
    font-weight: 600;
    margin-bottom: .5em;
    display: flex;
    /* color: ${props => props.theme.text}; */
`
export const Text = styled.div`
    font-weight: 300;
    margin-left: .5em;
    /* color: ${props => props.theme.text}; */
`
export const Title = styled.div`
    font-size: 1.125rem;
    font-weight: 800;
    color: ${props => props.theme.text};
    margin-bottom: 1em;

`
export const Section = styled.div`
    padding: 1em 2em;

`
