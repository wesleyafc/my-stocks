import styled from 'styled-components';


export const HeaderContainer = styled.header`

    margin-top:60px;
    margin-bottom:60px;

    .headerTitles{
        display:flex;
        flex-direction:column;
        align-items:center;
        color:#444;
    }

    .headerTitleSm{
        position:absolute;
        top:18%;
        font-size:20px;
    }

    .headerTitleLg{
        position:absolute;
        top:20%;
        font-size:100px;

    }

    .headerLogo{
        width:100%;
        height:450px;
        margin-top:80px;
        object-fit:cover;
    }
`