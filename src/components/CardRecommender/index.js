import styled from "styled-components"
import Title from "../Title"
import { useEffect, useState } from 'react';
import { getLivrosPorID } from '../../services/books';
import { Link, useParams } from "react-router-dom";
import BooksPage from "../BooksPage";

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


function CardRecomender() {
    const [livroPorId, setLivro] = useState(null);

    useEffect(() => {
        fetchLivroPorId("662fd8c74ce1e0d6ae06111c");
    }, []);

    async function fetchLivroPorId(id) {
        const livroRetornado = await getLivrosPorID(id);

        setLivro(livroRetornado);
    }

    if (!livroPorId) {
        return <div>Carregando...</div>
    }

    const {
        _id: id,
        title: titulo,
        author: {
            name: nomeAutor
        },
        price: preco,
        pages: paginas,
        src: img
    } = livroPorId;

    return (
        <Card>
            <div>
                <Title tamanhoFonte="16px" cor="#403831" alinhamento="left">Você pode se interessar por:</Title>
                <Title tamanhoFonte="16px" cor="#403831" alinhamento="left">{titulo}</Title>
                <Author>Livro escrito por {nomeAutor} </Author>
                <Descricao>Este livro custa R${preco}, e contém {paginas} páginas.</Descricao>
            </div>
            <div>
                <ImgLivro src={img} />
                <Link to={`/detalhes/${id}`}><Botao>Saiba mais</Botao></Link>
                
            </div>
        </Card>
    )
}

function BooksPageWrapper() {
    // Obtém o parâmetro de rota `id` usando o hook `useParams`
    const { id } = useParams();

    return <BooksPage urlTemplate="http://localhost:8000/books/{id}" dataId={id} />;
}

export  {CardRecomender,BooksPageWrapper} ;