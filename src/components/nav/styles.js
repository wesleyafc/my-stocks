import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Container = styled.div`
    height:50px;
    background-color:var(--green-color);
    font-size:1rem;
`;

export const Nav = styled.nav`
    display:flex;
    justify-content:space-between;
    padding:0.2rem calc((100vw - 1000px)/2);
    background-color:var(--green-color);
    padding:20px;
    
    img{
        width:35px;
        height:35px;
        border-radius:50%;
        object-fit: cover;
        margin-left:10px;
    }
`

export const NavLink = styled(Link)`
    color:black;
    font-size:1.2rem;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    height:100%;
    cursor: pointer;
    &:hover{
        opacity:0.8;
        color:var(--light-black-color)
    }
    &.active{
        color: var(--skobeloff);
        border:1px solid;
        border-radius :0.5rem;
    }

`
