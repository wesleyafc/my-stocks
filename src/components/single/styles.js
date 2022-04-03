import styled from 'styled-components';


export const SingleContainer = styled.div`
    flex: 9;
    margin-top:20px;

    .actionName{
            text-align: center;
            margin:10px;
            font-size:40px;
    }

    .options{
        font-size: 40px;
        text-align: center;
        margin-top:10px;
    }

    .optionIcon{
        margin-left: 20px;
        cursor:pointer;
    }

    .optionIcon:first-child{
        color:#06d6a0;
    }

    .optionIcon:last-child{
        color:#d90429;
    }

    .optionIcon:hover{
        opacity:0.9;
    }

    .singleTransactionInfo{
        margin-top:120px;
        font-size: 60px;
        text-align: left;
        border:1px solid white;
        border-radius: 10px;
        line-height: 160px;

    }
`;
