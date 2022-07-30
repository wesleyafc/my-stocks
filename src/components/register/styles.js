import styled from 'styled-components'

export const Container = styled.div`
    height:calc(100vh - 50px);
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background-image: linear-gradient(to top,  var(--light-white), var(--light-blue));
`;

export const Wrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    padding:20px 80px;
    border-radius:8px;
    gap:20px;
    background-color:#f7f5f5;
`;

export const Title = styled.h1`
    font-size:24px;
`;

export const SubTitle = styled.h2`
    font-size:20px;
    font-weight: 300;
`;

export const Input = styled.input`
    border:1px solid gray;
    border-radius:3px;
    padding:10px;
    background-color:transparent;
    width:100%;
    :focus{
        outline:none;
    }
`;

export const Button = styled.button`
    margin-top:16px;
    border-radius:3px;
    border:none;
    padding:10px 20px;
    font-weight: bold;
    background-color:var(--green-color);
    color:white;
    text-transform:uppercase;
    transition:transform 0.5s ;
    text-transform:uppercase;

    :hover{
        transform:scale(1.1);
        transition:transform 0.5s ;

    }


`;

export const More = styled.h1`
`;
// export const BorderStyle = styled.div`
//     /* display:flex;
//     flex-direction:column;
//     align-items:center;
//     border-width: 1px;
//     border-style: solid;
//     padding:0 100px;
//     border-image:
//     linear-gradient(
//         to bottom,
//         red,
//         rgba(0, 0, 0, 0)
//     ) 1 100%; */

// `;

// export const Title = styled.h1`
//     color:white;
//     text-transform:uppercase;

// `;

// export const Form = styled.form`
//     margin-top:20px;
//     display:flex;
//     flex-direction:column;

// `;

// export const Label = styled.label`
//     margin:10px 0;
//     color:whitesmoke;

// `;

// export const Input = styled.input`
//     padding:10px;
//     background-color:white;
//     border:none;
//     border-radius:8px;
//     outline:none;

// `;

// export const ButtonLogin = styled.button`
//     width:100%;
//     border:none;
//     border-radius:8px;
//     color:white;
//     background-color:var(--green-color);
//     padding:10px;
//     margin-top:20px;
//     cursor:pointer;
//     transition:transform 0.5s ;
//     text-transform:uppercase;

//     :hover{
//         transform:scale(1.1);
//         transition:transform 0.5s ;

//     }

// `;

// export const SpanError = styled.span`
//     color:red;
//     text-align:center;
//     font-size:16px;
//     word-break:break-all;
// `;

// export const ButtonRegister = styled.button`
//     width:100%;
//     font-size:12px;
//     background-color:#d90429;
//     border:none;
//     border-radius:8px;
//     color:white;
//     padding:10px;
//     margin-top:20px;
//     cursor:pointer;
//     transition:transform 0.5s ;
//     text-transform:uppercase;

//     :hover{
//         transform:scale(1.1);
//         transition:transform 0.5s ;

//     }

// `;

