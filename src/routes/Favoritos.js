import Search from '../components/Search';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #1f5f61 55%, #0b8185);
`

function Favoritos() {
  return (
    <AppContainer>
      <Search />

    </AppContainer>

  );
}

export default Favoritos;
