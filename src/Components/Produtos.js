import React from 'react';
import CardProduto from './CardProduto';
import styled from 'styled-components';

const ContainerProdutos = styled.div `
    margin: 10px;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 3px solid green;
`

class Produtos extends React.Component {
    render() {
        return (
            <ContainerProdutos>
                <h3>Produtos</h3>
                {/* Continuei passando os dados por props até chegar no Card */}
                <CardProduto produtos={this.props.produtos} />
            </ContainerProdutos>
        );
    }
}

export default Produtos;