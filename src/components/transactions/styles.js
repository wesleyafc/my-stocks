import styled from "styled-components";

export const UlContainer = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-content: center;
    flex-wrap: wrap;
    
    li{
        list-style: none;
        width:350px;
        /* max-width:350px; */
        max-height:400px;
        margin:0.2rem;

    }
`