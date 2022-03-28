//create global styles

import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
:root{
    --green-color:#10b981;
    --black-color:#0b0f18;
    --light-black-color:#111826;
    --light-blue:#0b79cd;
    --gray-color:rgba(255, 255, 255, 0.08);
}

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;       
}

body{
    background-color: var(--black-color)
}



`;