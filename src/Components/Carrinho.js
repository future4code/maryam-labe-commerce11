import React from 'react';
import styled from 'styled-components';

const ContainerCarrinho = styled.div `
margin: 10px;
padding: 10px;
border: 1px solid black;
`

class Carrinho extends React.Component {
    render() {
        return (
            <ContainerCarrinho>
                <h3>Carrinho</h3>
                <p>Valor Total: R$</p>
            </ContainerCarrinho>
        );
    }
}

export default Carrinho;