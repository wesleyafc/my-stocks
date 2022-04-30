import styled from 'styled-components'

export const RegisterContainer = styled.div`
    height:calc(100vh - 50px);
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background-image: linear-gradient(to bottom, #051937, #061d3d, #082143, #09254a, #0b2950, #0e305c, #103768, #123f74, #144d89, #155b9f, #136ab6, #0b79cd);
    background-size:cover;
    background-color:whitesmoke;
    letter-spacing:2px;

`;

export const BorderStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border-width: 1px;
    border-style: solid;
    padding:0 100px;
    border-image: 
    linear-gradient(
        to bottom, 
        red, 
        rgba(0, 0, 0, 0)
    ) 1 100%;

`;

export const Title = styled.h1`
    color:white;
    text-transform:uppercase;

`;

export const Form = styled.form`
    margin-top:20px;
    display:flex;
    flex-direction:column;

`;

export const Label = styled.label`
    margin:10px 0;
    color:whitesmoke;

`;

export const Input = styled.input`
    padding:10px;
    background-color:white;
    border:none;
    border-radius:8px;
    outline:none;

`;

export const ButtonLogin = styled.button`
    width:100%;
    border:none;
    border-radius:8px;
    color:white;
    background-color:var(--green-color);
    padding:10px;
    margin-top:20px;
    cursor:pointer;
    transition:transform 0.5s ;
    text-transform:uppercase;

    :hover{
        transform:scale(1.1);
        transition:transform 0.5s ;

    }

`;

export const SpanError = styled.span`
    color:red;
    text-align:center;
    font-size:16px;
    word-break:break-all;
`;

export const ButtonRegister = styled.button`
    width:100%;
    font-size:12px;
    background-color:#d90429;
    border:none;
    border-radius:8px;
    color:white;
    padding:10px;
    margin-top:20px;
    cursor:pointer;
    transition:transform 0.5s ;
    text-transform:uppercase;

    :hover{
        transform:scale(1.1);
        transition:transform 0.5s ;

    }

`;

