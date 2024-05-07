import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    margin-top: 100px;
    background-image: linear-gradient(90deg, #1f5f61 65%, #0b8185);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    cursor: pointer;
`
const RecentBooks = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin: 20px;
    transition: 0.4s all;
    img{
        width: 150px;
    }
    &:hover {
        transform: scale(1.1)
    }
`

export {
    UltimosLancamentosContainer,
    NovosLivrosContainer,
    RecentBooks
}