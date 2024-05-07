import styled from 'styled-components';

const BooksContainer = styled.nav`
    background-image: linear-gradient(90deg, #1f5f61 55%, #0b8185);
    text-align: center;
    padding: 10% 0 25%;
    height: 100%;
    width: 100%;
    
`

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: auto;
    height: auto;
    max-width: 800px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%; 
    padding: 10px;
    gap: 20px;
`
const Descriptions = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 500px; 
    flex-wrap: wrap; 
    word-break: break-word;
`
export {
    BooksContainer,
    Card,
    Descriptions
    
}