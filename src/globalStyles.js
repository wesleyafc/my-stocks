//create global styles

import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
:root{
    --green-color:#10b981;
    --black-color:#0b0f18;
    --light-black-color:#111826;
    --light-blue:#0b79cd;
    --gray-color:#0b0f19;
    --skobeloff: #006466ff;
    --midnight-green-eagle-green: #065a60ff;
    --midnight-green-eagle-green-2: #0b525bff;
    --midnight-green-eagle-green-3: #144552ff;
    --charcoal: #1b3a4bff;
    --prussian-blue: #212f45ff;
    --space-cadet: #272640ff;
    --dark-purple: #312244ff;
    --dark-purple-2: #3e1f47ff;
    --palatinate-purple: #4d194dff;
}

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
}

body{
    background-color:var( --light-black-color);      

}

`;