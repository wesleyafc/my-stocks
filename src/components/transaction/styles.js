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
    padding:2rem;
    background-color:white;
    border:1px solid var(--green-color);
    color:var(--light-black-color);

    &:hover{
        transform:scale(1.05);
        background-color:var(--light-white);
    }

    h1{
        padding:1rem;
        color:var(--green-color);
    }

    h3{
        font-family: 'Poppins', sans-serif;      
        font-size:1.5rem;
        margin:1rem 0 1rem 0;
        border-radius:0.2rem;
        text-align:right;
        
    }
    
    h3 span{
        margin-left:3px; 
        float:left; 
        font-size:1rem;
        margin-top:0.5rem;
    }

    h4{
        font-family: 'Poppins', sans-serif;      
        font-size:1.5rem;
        margin:1rem 0 1rem 0;
        border-radius:0.2rem;
        text-align:right;
    }

    h4 span{
        margin-left:3px;
        float:left;
        font-size:1rem;
        margin-top:0.2rem;
    }

    h2{
        font-family: 'Poppins', sans-serif;
        font-size:1rem;
        border-radius:0.2rem;
        margin:1rem 0 1rem 0;
        text-align:right;
    }

    h2 span{
        font-family: 'Poppins', sans-serif; 
        margin-left:3px;
        float:left;
        font-size:1rem;
        margin-top:0.1rem;
    }

    p{
        margin-top:0.5rem;
        padding:3px;
        color:gray;
        opacity:0.5;
        font-size:1rem;
    }

    .update-button{
        color:var(--green-color);
        margin-top:0.2rem;
    }

    .update-button:hover{
        background-color:var(--green-color);;
        color:white;
    }

    .delete-button{
        color:#ef233c;
    }

    .delete-button:hover{
        background-color:red;
        color:white;

    }

`;