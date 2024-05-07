import styled from 'styled-components';

const ListaLivros = styled.div`  
    display: flex;
    flex-direction: row ;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap:15px;
    padding: 20px;
    border-radius: 10px;
    margin: 0 auto;
    width:60%;
`
const LivroItem = styled.li`
    width: 200px;
    text-align: center;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    transition: 0.4s all;
    img{
        width: 40%;
        margin-bottom: 2px;
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
    ListaLivros, 
    LivroItem
}