import styled from "styled-components";

const Title = styled.h2`
    width: 100%;
    padding: ${props =>props.padding || "30px 0"};
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props =>props.tamanhoFonte || '20px'};
    text-align: ${props =>props.alinhamento || 'center'};;
    margin: 0;
`

export default Title;
