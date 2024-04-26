import styled from 'styled-components';

const TextStyle = styled.p`
    color:${props => props.cor || '#1f5f61'};
    font-size:${props => props.tamanhoFonte || '20px'};
`

export default TextStyle;