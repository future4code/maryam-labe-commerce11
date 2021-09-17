import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
    border: 1px solid black;
`

class CardProduto extends React.Component {
    render() {
        return (
            <Card>
                <h3>Nome do Produto</h3>
                <p>Preço</p>
                <p>Imagem</p>
                {/* {props.produtos.nome}
                {props.produtos.preco}
                {props.produtos.imagem} */}
            </Card>
        );
    }
}
  
export default CardProduto;