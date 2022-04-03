
import styled from 'styled-components'

export const SideBarContainer = styled.div`

    flex:3;
    margin:0 10px 0 10px;
    padding-bottom:30px;
    background-color:var( --black-color);
    border-radius:18px;
    display:flex;
    flex-direction:column;
    align-items:center;

    .chartimg{
        width: 250px;
        height: 250px;
    }

    .sideBarItem{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sideBarTitle{
        margin:10px;
        padding:10px;
        width:80%;
        border-top:1px solid #a7a4a4;
        border-bottom:1px solid #a7a4a4;
        font-size:12px;
        color:var(--midnight-green-eagle-green);
        line-height:20px;
        text-align:center;
        text-transform:uppercase;
    }

    .sideBarItem  > img{
        margin:15px 5px 15px 5px;
    }

    .sideBarItem> p{
        padding:30px;
    }

    .sideBarList{
        list-style:none;
        margin-bottom:30px;
    }

    .sideBarListItem{
        display:inline-block;
        width:50%;
        text-align:center;
        margin-top:20px;
        cursor: pointer;
        color:var(--green-color)
    }

    .total{
        color:var(--midnight-green-eagle-green);
    }
`