import Input from '../Input';
import { SearchContainer, Titulo, Subtitulo, Resultados, Resultado } from './style'
import { useEffect, useState } from 'react';
import { getLivros } from '../../services/books';
import { Link } from 'react-router-dom';

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