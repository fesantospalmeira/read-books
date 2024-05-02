import Title from '../Title'
import { CardRecomender } from '../CardRecommender';
import styled from "styled-components";
import { useEffect, useState } from 'react';
import { getRecentsBooks } from '../../services/books';
import { Link } from 'react-router-dom';

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
    justify-content: center;
    cursor: pointer;
`
const RecentBooks = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    margin: 20px;
        transition: 0.4s all;
        img{
            width: 150px;
        }
        &:hover {
            transform: scale(1.1)
        }
`
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