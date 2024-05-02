import Input from '../Input';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getLivros } from '../../services/books';
import { Link } from 'react-router-dom';


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
function Search() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetchLivros();
    }, [])

    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
    }

    return (
        <SearchContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder='Escreva sua próxima leitura'
                onChange={event => {
                    const textoDigitado = event.target.value;
                    const resultadoPesquisa = livros.filter(livro => livro.title.toLowerCase().includes(textoDigitado))
                    setLivrosPesquisados(textoDigitado ? resultadoPesquisa : []);
                }}
            />
            <Resultados>
                {livrosPesquisados.map(livro => (
                    <Resultado><li>
                        <p>{livro.title}</p>
                        <Link to={`/detalhes/${livro._id}`}>
                            <img src={livro.src} alt={livro.title} />
                        </Link>

                    </li>

                    </Resultado>
                ))}
            </Resultados>
        </SearchContainer>
    )
}

export default Search;