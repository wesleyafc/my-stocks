import styled from 'styled-components';


export const ProfileContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;

`;

export const ProfileWrapper = styled.div`
    padding:20px;

`;

export const Title = styled.h1`
    font-size:30px;
    margin:20px 0;
    color:var(--green-color);
    text-transform:uppercase;

`;

export const ProfileForm = styled.form`
    display:flex;
    flex-direction:column;

`;

export const Label = styled.label`
    font-size:16px;
    margin-top:20px;
    text-transform:uppercase;
    color:var(--light-blue);
    letter-spacing:2px;

`;

export const SettingsProperties = styled.div`
    display:flex;
    align-items:center;
    margin:10px 0;

`;

export const Image = styled.img`
    width:750px;
    height:250px;
    border-radius:20px;
    object-fit:cover;

`;

export const IconsWrapper = styled.div`
    width:25px;
    height:25px;
    border-radius:50%;
    background-color:lightcoral;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:10px;
    cursor: pointer;
    transition:background-color 0.5s;

    :hover{
        background-color:red;
        transition:background-color 0.5s;
    }

`;

export const InputFile = styled.input`
    display:none;

`;

export const Input = styled.input`
    color:black;
    margin:10px 0;
    height:30px;
    border:none;
    border-bottom: 2px solid whitesmoke;
    outline:none;
    font-size:20px;
    letter-spacing:2px;

    &:focus{
        border-bottom: 1px solid var(--green-color);
    }

`;

export const ButtonUpdate = styled.button`
    width:150px;
    align-self:center;
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

    :last-child{
        color:red;
        font-size:12px;
        cursor:pointer;
        border:1px solid whitesmoke;
        border-radius:8px;
        padding:10px;
        background-color:#d90429;
        color:white;
        transition:transform 0.5s ;
        opacity:0.8;

}
    
`;