import React from 'react';
import CardProduto from './CardProduto';
import styled from 'styled-components';



class Produtos extends React.Component {

    render() {
        return (
            <div>
                <h3>Produtos</h3>
                <CardProduto />
                {/* produtos={this.state.produtos} /> */}
            </div>
        );
    }
}

export default Produtos;