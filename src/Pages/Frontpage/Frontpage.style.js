import styled from "styled-components";

export const FrontpageStyle = styled.main`
p{
    text-align: center;
    font-size: 30px;
    margin: 5vh 0
}
.slider{
    background-size: cover;
    height: 50vh;
    color: white;
    text-align: center;
    h1{
        font-size: 40px;
        padding-top: 20vh;
    }

    p{
        font-size: 25px;
        
    }
}

.search{
    background-color: white;
    text-align: center;
    width: 50%;
    margin-left: 25%;
    margin-top: -10vh;
    padding: 2vh 2vw;
h1{
    margin-top: 2vh;
}

    ul{
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        width: 50%;
        margin-left: 22%;
        margin-top: 2vh;
        margin-bottom: 10vh;
        font-weight: bold;
        font-size: 20px;
    }
    input{
        margin-top: 2vh;
        font-size: 30px;
        border-radius: 10px;
        border: solid 1px black;
        height: 5vh;
        padding-left: 1vw;
    }
    button{
        font-size: 30px;
        border-radius: 10px;
        border: solid 1px black;
        height: 6vh;
    }


}    

.result{
    text-align: center;
    h1{
        margin: 2vh 0;
    }
    }
`