import { Card, Botao, Descricao, Author, ImgLivro } from './style'
import Title from "../Title"
import { useEffect, useState } from 'react';
import { getLivrosPorID } from '../../services/books';
import { Link, useParams } from "react-router-dom";
import BooksPage from "../BooksPage";


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
                <Link 
                to={`/detalhes/${id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
                ><Botao>Saiba mais</Botao></Link>

            </div>
        </Card>
    )
}

function BooksPageWrapper() {
    // Obtém o parâmetro de rota `id` usando o hook `useParams`
    const { id } = useParams();

    return <BooksPage urlTemplate="http://localhost:8000/books/{id}" dataId={id} />;
}

export { CardRecomender, BooksPageWrapper };