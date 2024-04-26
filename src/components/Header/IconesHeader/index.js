import perfil from '../../../img/header/perfil.svg';
import sacola from '../../../img/header/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul`
    display: flex;
`
const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    align-items: center;
    transition: 0.3 all;

    &:hover {
        transform: scale(1.1)
    }
`
function IconesHeader() {
    const icones = [perfil, sacola];
    return (
        <Icones className='icones'>
            {icones.map((imagem) => (
                <Icone><img className='icone' alt='icones' src={imagem}></img></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader;