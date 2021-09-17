import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
    margin: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    img {
        width: 50%;
    }
`

class CardProduto extends React.Component {

    adicionaCompra = () => {
        console.log("Comprei")
    }

    render() {
    //Para poder renderizar cada produto, precisa ser feito um map do array, conforma abaixo
        return this.props.produtos.map((produtos) => {
            return (
                <Card>
                    <img src={produtos.imagem} />
                    <h3>{produtos.nome}</h3>
                    <div>R$ {produtos.preco}</div>
                    <button onClick={this.adicionaCompra}>Comprar</button>
                </Card>
            );
        })
    }
}
  
export default CardProduto;