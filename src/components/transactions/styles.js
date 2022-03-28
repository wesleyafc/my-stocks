import styled from 'styled-components'


export const Container = styled.div`
        margin: auto;
        width: 90%;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;

    h1{
    color:white;
    font-size: 2.5em;
    text-align: center;
    padding:5%
    }

    button{
    border: 0px;
    cursor: pointer;
    background-color: var(--gray-color);
    text-align: center;
    color: white;
    width: 100%;
    border-radius:8px;
    display:block;

    }

 

    button:hover{
        opacity: 0.8;
    }

    .newTab{
        cursor: pointer;
    }
    .newTab:hover{
        color:green;
    }

`;



export const Main = styled.table`
width: 100%;
color:whitesmoke;
    td, th{
        border:1px solid var(--light-black-color);
        
    }

    thead tr th{
        padding:16px 0 16px 0;
        border-radius:8px;
        text-transform:capitalize
    }


    th{
        padding:16px 0 16px 0;
        text-align:center;
        background-color: var(--green-color);
        color:whitesmoke;
    }

    tbody tr td{
        padding:16px 0 16px 0;
        border-radius:8px;
        background-color:var(--light-black-color);
        text-align:center;
    }


`;


