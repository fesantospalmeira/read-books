import { Livros } from './latestReleasesData.js';
import Title from '../Title'
import CardRecomender from '../CardRecommender';
import imagemLivro from '../../img/books/livro2.png'
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
    justify-content: center;
    cursor: pointer;
`
function LatestReleases() {
    return (
        <UltimosLancamentosContainer>
            <Title
            cor="#30261c"
            tamanhoFonte='36px'
            >
                Últimos Lançamentos

            </Title>
            <NovosLivrosContainer>
                {Livros.map(livro => (
                    <img src={livro.src} alt={livro.nome} />
                ))}

            </NovosLivrosContainer>
            <CardRecomender
                titulo='Talvez você se interesse por...'
                subtitulo= 'Angular 11'
                descricao= 'Construindo uma aplicação com a plataforma Google'
                img = {imagemLivro}
                alt = 'Ícone Angular'
            />

        </UltimosLancamentosContainer>
    )
}

export default LatestReleases;