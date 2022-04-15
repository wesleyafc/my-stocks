import styled from "styled-components";

export const TransactionContainerCards = styled.div`
    padding:1rem;
    width:100%;
    height:100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    border-radius:0.5rem;


    h2{
        font-family: 'Poppins', sans-serif;
        font-size:1rem;
        border:1px dashed #ef233c;
        border-radius:0.2rem;
        margin:1rem 0 1rem 0;
        color:red;

    }


    h3{
        font-size:1.5rem;
        margin-top:0.5rem;
        border:1px solid var(--green-color);
        border-radius:0.2rem;
    }

    h4{
        font-size:1.5rem;
        margin-top:0.5rem;
        border:1px dashed gray;
        border-radius:0.2rem;
    }

    p{
        margin-top:0.5rem;
        padding:3px;
        color:gray;
        opacity:0.5;
        font-size:1rem;
    }

    span{
        
    }

`;