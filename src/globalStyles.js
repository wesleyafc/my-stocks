//create global styles

import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
:root{
    --green-color:#10b981;
    --black-color:#0b0f18;
    --light-black-color:#111826;
    --light-white:#edf2f7d9;
    --light-blue:#0b79cd;

}

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
}

.close-modal-button{
    position:absolute;
    right:1.5rem;
    top:1.5rem;
    border:0;
    background:transparent;
    font-size:1rem;
    cursor:pointer;

    &:hover{
        color:red;
    }
}

`;