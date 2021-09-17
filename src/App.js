import React from 'react';
import Filtro from './Components/Filtro';
import Produtos from './Components/Produtos';
import Carrinho from './Components/Carrinho';
import styled from 'styled-components';



class App extends React.Component {

  state = {
    produtos: [
      {
        id: 1,
        nome: "Produto 1",
        preco: 10,
        imagem: "https://picsum.photos/50/50"
      },
      {
        id: 2,
        nome: "Produto 2",
        preco: 20,
        imagem: "https://picsum.photos/50/50"
      },
      {
        id: 3,
        nome: "Produto 3",
        preco: 30,
        imagem: "https://picsum.photos/50/50"
      },
      {
        id: 4,
        nome: "Produto 4",
        preco: 40,
        imagem: "https://picsum.photos/50/50"
      },
      {
        id: 5,
        nome: "Produto 5",
        preco: 50,
        imagem: "https://picsum.photos/50/50"
      }
    ]
  }



  render() {
    return (
      <div>
        <Filtro />
        <Produtos /> 
        {/* produtos={this.state.produtos}  */}
        <Carrinho />
      </div>
    );
  }
}

export default App;
