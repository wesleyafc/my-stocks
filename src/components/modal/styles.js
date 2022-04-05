import styled from 'styled-components';


export const ModalContainer = styled.div`

button {
    width: 100%;
    margin:20px 0 ;
    padding:20px 0 ;
    border-radius:4px;
    border:0;
    cursor: pointer;
    background-color:var(--green-color);
    font-size:16px;
    font-weight:bold;
    color:whitesmoke;
    text-transform:uppercase;

    &:hover{
        opacity:0.9;
        transition:0.3s;

    }

}
  
`

export const InputContainer = styled.div`

    h2{
        color:var(--green-color);
        font-size:1.5rem;
        margin-bottom:2rem;
        text-transform:uppercase;
        text-align:center;
    }



    input{
        width: 100%;
        padding: 0 1.5rem;
        height:4rem;
        border-radius:0.25rem;
        border:1px solid #d7d7d7;
        background:#e7e9ee;

        font-weight:400;
        font-size:1rem;
        text-transform:capitalize;

        &::placeholder{
            color:gray;
        }

        & + input{
            margin-top:1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height:4rem;
        background-color: var(--green-color);
        color:#fff;
        border-radius:0.25rem;
        border:0;
        font-size:1rem;
        font-weight:bold;
        margin-top:1.5rem;
        text-transform:uppercase;
        transition:filter 0.3s;

        &:hover{
            filter:brightness(0.9);
        }
    }

`;