import styled from 'styled-components';
import TextStyle from '../TextStyle'
const OpcaoContainer = styled.ul`
    display: flex
`
const Opcoes = styled.li`
    min-width: 120px;
    font: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    transition: 0.3 all;

    &:hover {
        transform: scale(1.1)
    }
`

function OpcoesHeader() {
    const textoOpcoes = ['Categorias', 'Favoritos', 'Minha Estante'];
    return (
        <OpcaoContainer>
            {textoOpcoes.map((texto) => (
                <Opcoes><TextStyle
                cor= '#30261c'
                >{texto}</TextStyle></Opcoes>
            ))}
        </OpcaoContainer>
    )
}

export default OpcoesHeader;