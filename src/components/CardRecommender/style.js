import styled from "styled-components"
const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Botao = styled.button`
    background-color: #1f5f61;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    border-radius: 5%;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    color: #403831;
    max-width: 300px;
`

const Author = styled.h4`
    color: #30261c;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
`

export {
    Card,
    Botao,
    Descricao,
    Author,
    ImgLivro
}