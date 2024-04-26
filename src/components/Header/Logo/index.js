import logo from '../../../img/header/icon.png';
import styled from 'styled-components';
import TextStyle from '../TextStyle'

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

`
const LogoImage = styled.img`
    width:70px;
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='Logo Alura Books'/>
            <TextStyle
            tamanhoFonte= '24px'
            ><strong>Read</strong>Books</TextStyle>
        </LogoContainer>
    )
}

export default Logo;
