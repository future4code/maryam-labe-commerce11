import React from 'react';
import styled from 'styled-components';

const ContainerFiltro = styled.div `
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    input {
        max-width: 150px;
    }
`


class Filtro extends React.Component {
    
    state = {
        valorMin: "",
        valorMax: "",
        produto: ""
    };

    atualizarValorMin = (event) => {
        this.setState({valorMin: event.target.value})
    }

    atualizarValorMax = (event) => {
        this.setState({valorMax: event.target.value})
    }

    atualizarProduto = (event) => {
        this.setState({produto: event.target.value})
    }



    render() {
        return (
            <ContainerFiltro>
                <h3>Filtros</h3>
                <label htmlFor="valorminimo">Valor Mínimo:</label>
                <input 
                    value={this.state.valorMin}
                    name="valorminimo"
                    onChange={this.atualizarValorMin}
                />

                <label htmlFor="valormaximo">Valor Máximo:</label>
                <input
                    value={this.state.valorMax}
                    name="valormaximo"
                    onChange={this.atualizarValorMax}
                />

                <label htmlFor="produtos">Nome do Produto:</label>
                <input
                    value={this.state.produto}
                    name="produtos"
                    onChange={this.atualizarProduto}
                />
            </ContainerFiltro>
        );
    }
}

export default Filtro;