import styled from "styled-components";

export const FrontpageStyle = styled.main`

p{
    text-align: center;
    font-size: 30px;
    margin: 5vh 0
}

.slider{
    z-index: -1;
    background-size: cover;
    height: 100vh;
    color: white;
    text-align: center;
    
    h1{
        font-size: 40px;
        padding-top: 20vh;
        margin-left: 5vw;
        text-align: center;
    }

    p{
        font-size: 25px;
        
    }
}

.search{
    z-index: 1;
    position:absolute;
    top: 25vh;
    background-color: rgba(0,0,0,0);
    text-align: center;
    width: 50%;
    margin-left: 25%;
    margin-top: 10vh;
    padding: 2vh 2vw;

    form{
        background-color: white;
        padding: 1vh 1vw;
        display: flex;
        justify-content: space-between;
        border-radius: 18px;
        select{
            border: none;
            padding: 2vh 2vw;
            font-size: 18px;
            background-color: black;
            color: white;
            border-radius: 18px;
        }
        input{
        border: none;
        font-size: 18px;
        background-color: white;
        border-radius: 10px;
        height: 7vh;
        padding-left: 12vw;
        width: 60%;
        outline: none;
    }

    button{
        border: none;
        background-color: white;
        font-size: 25px;
        border-radius: 10px;
        height: 7vh;
        outline: none;
    }
    }
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
    


}    

.result{
    margin-top: 5vh;
    border-radius: 18px;
    background-color: white;
height: 40vh;
overflow: auto;
color: black;
    text-align: center;
    width: 49vw;

    article{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: fit-content;
        border-bottom: solid 1px;
      p{
        width: 10vw;
        text-align: left;
        padding-top: 0;
        padding-left: 2vw;
        font-size: 18px;
        margin: 2vh 0;

    }  
    p:last-of-type{
        width: 5vw;
    }
        button{
            margin-right: 2vw;
            border: none;
            font-weight: bold;
        }

    }
    
    }

    .result::-webkit-scrollbar {
  display: none;
}
`