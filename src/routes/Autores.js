import styled from 'styled-components';
import AuthorsList from '../components/AuthorsList';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #1f5f61 55%, #0b8185);
`

function Autores() {
  return (
    <AppContainer>
      <AuthorsList/>

    </AppContainer>

  );
}

export default Autores;
