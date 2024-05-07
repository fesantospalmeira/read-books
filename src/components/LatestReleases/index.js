import Title from '../Title'
import { CardRecomender } from '../CardRecommender';
import {UltimosLancamentosContainer,NovosLivrosContainer,RecentBooks } from './style'
import { useEffect, useState } from 'react';
import { getRecentsBooks } from '../../services/books';
import { Link } from 'react-router-dom';


function LatestReleases() {
    const [livrosRecents, setLivrosRecentes] = useState([]);

    useEffect(() => {
        fetchLivrosRecentes();
    }, [])

    async function fetchLivrosRecentes() {
        const recentBooksAPI = await getRecentsBooks();
        setLivrosRecentes(recentBooksAPI)
    }

    return (
        <UltimosLancamentosContainer>
            <Title
                cor="#30261c"
                tamanhoFonte='36px'
            >
                Últimos Lançamentos

            </Title>
            <NovosLivrosContainer>
                {livrosRecents.map((livro) => (
                    <RecentBooks>
                        <p><strong>{livro.title}</strong></p>
                        <Link to={`/detalhes/${livro._id}`}>
                            <img src={livro.src} alt={livro.title} />
                        </Link>

                    </RecentBooks>

                ))}

            </NovosLivrosContainer>

            <CardRecomender />

        </UltimosLancamentosContainer>
    )
}

export default LatestReleases;