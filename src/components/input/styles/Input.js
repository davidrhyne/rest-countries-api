import styled from 'styled-components';

export const Container = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    display: flex;
    /* border: 1px dodgerblue solid; */
    justify-content: space-between;
    row-gap: 2.5em;
    flex-wrap: wrap;
    padding: 2em 1em;
    font-size: .75rem;
    /* max-width: 1220px; */
    margin: 0 auto;

    @media (min-width: 700px) {
        padding: 2em 10em;
        font-size: .875rem;
    }

    @media (min-width: 1500px) {
        padding: 2em 10%;
     
    }


`

export const Icon = styled.div`
    margin: .7em 1em 0 0;
    font-size: 1rem;

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
    background: ${props => props.theme.element};;
    color: ${props => props.theme.text};
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0;
    text-align: left;
    margin-right: 3em;
    cursor: pointer;
    
`
export const DropDown = styled.ul`
    background: ${props => props.theme.element};;
    color: ${props => props.theme.text};
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 1em 9.5em 1em 2em;
    list-style-type: none;
    margin: 0;

    z-index: 9;
    position: absolute;
    top: 60px;
    right: 0; 
    
      
    
    li {
        margin-bottom: .5em;

        @media (min-width: 700px) {
            
        }

    }

    @media (min-width: 700px) {
        top: 70px;
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
    

    ${props => props.searchField && `
        /* background: dodgerblue; */
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

`