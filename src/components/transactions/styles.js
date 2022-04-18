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

export const TotalInvestiments = styled.div`
        font-size:2rem;
        padding: 2rem;
        text-align: center;
        text-transform: capitalize;



        span{
        font-size:3rem;
        color:var(--green-color);
        border-bottom:3px dashed var(--green-color);
        }

`;