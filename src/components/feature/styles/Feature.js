import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.background};;
    color: ${props => props.theme.text};
    padding: 3em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;    

    @media (min-width: 500px) {        
        padding: 2em;
        display: grid;
        margin: 0 auto;
        gap: 0 1em;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "buttonBack buttonBack "
            "image image"
            "title title"
            "panel1 panel2"
            "groupHeading groupHeading"        
        ;
    }

    @media (min-width: 700px) {
        
        padding: 5em;
        grid-template-columns: minmax(250px, 560px) 10px minmax(150px, 250px) minmax(150px, 250px);
        grid-template-rows: auto minmax(50px, 100px) minmax(50px, 200px) minmax(50px, 300px); 
        grid-template-areas: 
            "buttonBack buttonBack buttonBack buttonBack"
            "image . title title"
            "image . panel1 panel2"
            "groupHeading groupHeading groupHeading groupHeading"        
        ;
    }

    @media (min-width: 1000px) {
        font-size: 1rem;
        padding: 5em;
        grid-template-columns: minmax(250px, 560px) 50px minmax(150px, 250px) minmax(150px, 250px);
        grid-template-areas: 
            "buttonBack buttonBack buttonBack buttonBack"
            "image . title title"
            "image . panel1 panel2"
            "image . groupHeading groupHeading"        
        ;
    }

    a {
            color: ${props => props.theme.text};
        }
`

export const Button = styled.div`
    font-size: .875rem;
    background: ${props => props.theme.element};
    padding: .35em 1em;
    margin: 0 .75em .75em 0;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .2);
    border-radius: 2px;

    &:hover {
        box-shadow: 0px 0px 5px 2px ${props => props.theme.text};
    }

    ${props => props.backButton && `
        grid-area: buttonBack;
        background: ${props => props.theme.element};
        padding: .5em 1em;
        margin: 0 .5em .5em 0;
        max-width: 90px;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, .2);
        border-radius: 2px;

        i, span {
            margin-left: 1em;
            color: ${props => props.theme.text};        
        }

        span {
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 300;
        }

        @media (min-width: 700px) {        
            margin-bottom: 3em;        
        }

        &:hover {
            box-shadow: 0px 0px 5px 2px ${props => props.theme.text};
        }
    `} 

`

export const Image = styled.img`
    grid-area: image;
    border: 0;
    width: 100%;
    border-radius: 5px;
    max-height: 400px;
    margin: 3.5em auto 1.5em;

    @media (min-width: 600px) {        
        margin: 2em 0;
    }
`

export const Title = styled.div`
    grid-area: title;
    font-size: 1.375rem;
    font-weight: 800;
    margin: 1em 0;
    display: flex;
    align-items: flex-end;

    @media (min-width: 1000px) {
        font-size: 2rem;
        margin: 0 0 1em 0;        
    }
`

export const Section = styled.div`
    font-size: 1.375rem;
    
    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
        padding: 2em;
    }
`

export const SubSection = styled.div`

    ${props => props.panel1 && `
        grid-area: panel1;
    `} 
    
    ${props => props.panel2 && `
        grid-area: panel2;
    `} 

    @media (min-width: 500px) {
        margin-bottom: 2em;
    }

    @media (min-width: 700px) {
        margin-bottom: 0;
    }
`

export const Label = styled.div`
    margin-bottom: 1em;

    @media (min-width: 600px) {
        margin-bottom: .4em;
    }    
`

export const Text = styled.span`
    font-weight: 300;
    margin-left: .5em;
`
export const Spacer = styled.span`
    display: block;
    min-height: 2em;
`

export const GroupHeading = styled.div`
    grid-area: groupHeading;
    font-size: 1rem;

    span {
        display: block;
        padding-bottom: .75em;
    }
    
    @media (min-width: 600px) {
        display: unset;
        margin-top: 1em;
    }

    @media (min-width: 1200px) {
        margin-top: 0;
    }
`

export const Group = styled.div`
    display: flex;
    flex-wrap: wrap;

    a {
        text-decoration: none;
        color: ${props => props.theme.text};
        font-weight: 300;        
    }
`