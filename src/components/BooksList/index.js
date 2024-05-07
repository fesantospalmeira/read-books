
import { useEffect, useState } from 'react';
import Title from '../Title';
import { ListaLivros, LivroItem } from './style';
import { getAllBooks } from '../../services/books'
import { Link } from 'react-router-dom';

function BooksList() {
    const [books, setBooks] = useState(null);


    useEffect(() => {
        fetchBooks();

    }, [])

    async function fetchBooks() {
        const listaBooks = await getAllBooks();
        setBooks(listaBooks);
    }


    return (
        <nav>
            <Title padding="10px" cor="#403831" tamanhoFonte="25px">Todos os Livros</Title>
            <ListaLivros>
                {books && books.map((book, index) => (
                    <LivroItem key={index}>
                        <Link 
                        to={`/detalhes/${book._id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p> <strong>{book.title}</strong> </p>
                            <p>{book.author.name} </p>
                            <img src={book.src} alt={book.title}></img>
                        </Link>
                    </LivroItem>
                ))}
            </ListaLivros>

        </nav>
    )
}
export default BooksList;