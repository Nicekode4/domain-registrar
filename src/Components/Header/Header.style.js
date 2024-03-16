import styled from "styled-components";

export const HeaderStyle = styled.header`
nav{
    display: grid;
    grid-template-columns: 1% 99%;
    background-color: black;
    color: white;
    img{
        height: 10vh;
        margin: 2vh 2vw;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        
        li{
            padding: 2vh 2vw;
            padding-top: 5vh;
            font-size: 30px;
        }
        li:hover{
            border: solid 2px white;
            border-top: 0;
            border-bottom: 0;
        }
    }
}
`