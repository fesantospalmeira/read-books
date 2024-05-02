import styled from 'styled-components';
import { getAutores, getLivrosPorAutores } from '../../services/authors';
import { useEffect, useState } from 'react';
import Title from '../Title';


const ListaAutores = styled.div`  
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px;
    border-radius: 10px;
    width:50%;
    max-width: 1200px;
    margin: 0 auto;
`
const AutorItem = styled.li`
    width: calc(33.33% - 10%);
    margin-bottom: 20px;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    img{
        width: 100%;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    p strong{
        color: #333;
        font-size: 18px;
    }
    p{
        color: #666;
    font-size: 16px;
    }
`
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
                        <p> <strong>{autor.name}</strong> </p>
                        <p>{autor.age} anos</p>
                        <img src={autor.img} alt={autor.name}></img>

                    </AutorItem>
                ))}
            </ListaAutores>

        </nav>
    )
}
export default AuthorsList;