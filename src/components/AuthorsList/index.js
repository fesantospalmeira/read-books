import { getAutores } from '../../services/authors';
import { ListaAutores, AutorItem } from '../AuthorsList/style';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from '../Title';
import AuthorsPage from '../AuthorsPage';

function AuthorsList() {
    const [autores, setAutores] = useState(null);


    useEffect(() => {
        fetchAutores();

    }, [])

    async function fetchAutores() {
        const listaAutores = await getAutores();
        setAutores(listaAutores);
    }

    return (
        <nav>
            <Title padding="10px" cor="#403831" tamanhoFonte="25px">Todos os Autores</Title>
            <ListaAutores>
                {autores && autores.map((autor, index) => (
                    <AutorItem key={index}>
                        <Link 
                        to={`/autores/${autor._id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p> <strong>{autor.name}</strong> </p>
                            <p>{autor.age} anos</p>
                            <img src={autor.img} alt={autor.name}></img>

                        </Link>
                    </AutorItem>
                ))}
            </ListaAutores>

        </nav>
    )

}
function AuthorPageWrapper() {
    // Obtém o parâmetro de rota `id` usando o hook `useParams`
    const { id } = useParams();

    return <AuthorsPage urlTemplate="http://localhost:8000/authors/{id}" dataId={id} />;
}
export { AuthorsList, AuthorPageWrapper };