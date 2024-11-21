import styled from "styled-components";

export const HeaderStyle = styled.header`
z-index: 2;
position: absolute;
nav{
    display: grid;
    grid-template-columns: 1% 64% 35%;
    background-color: rgba(0,0,0,0);
    color: white;
    img{
        height: 10vh;
        margin: 2vh 2vw;
    }
    ul:first-of-type{
        margin-right: 7vw;
    }
    ul{
        list-style: none;
        margin-left: 10vw;
        display: flex;
        justify-content: space-evenly;
        
        li{
            padding: 2vh 2vw;
            padding-top: 5vh;
            font-size: 18px;
        }
        li:hover{
color: gray;
        }
    }
}
`