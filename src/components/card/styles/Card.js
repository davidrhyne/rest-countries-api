import styled from 'styled-components';

export const Container = styled.div`
    background: lightgray;
    width: 265px;
    background: ${props => props.theme.element};;
    color: ${props => props.theme.text};
    margin: 2em;
    border-radius: 5px;
  
    a {
        text-decoration: none;
    }

    @media (min-width: 700px) {
        margin: 2em;        
    }
`

export const Group = styled.div`
    background: ${props => props.theme.background};;
    color: ${props => props.theme.text};
    display: flex;
    flex-wrap: wrap;
    padding: 0 2em;
    justify-content: center;
    margin: 0 auto;

    @media (min-width: 1500px) {
        padding: 0 5%;        
    }

    @media (min-width: 1800px) {
        padding: 0 10%;        
    }    
`
export const Image = styled.img`
    border: 0;
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 185px;
    object-fit: cover;
`
export const Label = styled.div`
    font-weight: 600;
    margin-bottom: .5em;
    display: flex;
`
export const Text = styled.div`
    font-weight: 300;
    margin-left: .5em;
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
