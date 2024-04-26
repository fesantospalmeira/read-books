import Logo from './Logo';
import OpcoesHeader from './OpcoesHeader';
import IconesHeader from './IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>

    )
}

export default Header;