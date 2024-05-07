import styled from 'styled-components';
const SearchContainer = styled.section`
    margin-bottom:250px;
    background-image: linear-gradient(90deg, #1f5f61 55%, #0b8185);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;

`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultados = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const Resultado = styled.div`
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
    SearchContainer,
    Titulo,
    Subtitulo,
    Resultados,
    Resultado
}