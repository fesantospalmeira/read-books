import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { Livros } from './dataSearch.js';

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

    &:hover {
        transform: scale(1.1)
    }
`
function Search() {
    const [livrosPesquisados, setLivrosDigitado] = useState([]);

    return (
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={event => {
                    const textoDigitado = event.target.value;
                    const resultadoPesquisa = Livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosDigitado(resultadoPesquisa);
                }}
            />
            <Resultados>
                {livrosPesquisados.map(livro => (
                    <Resultado>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt={livro.nome} />

                    </Resultado>
                ))}
            </Resultados>
        </SearchContainer>
    )
}

export default Search;