import styled from 'styled-components';

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
    transition: 0.4s all;
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
    &:hover {
        transform: scale(1.1)
    }
`

export { 
    ListaAutores, 
    AutorItem
}