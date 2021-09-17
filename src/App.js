import React from 'react';
import Filtro from './Components/Filtro';
import Produtos from './Components/Produtos';
import Carrinho from './Components/Carrinho';
import styled from 'styled-components';
import ShirtImage1 from './Imagens/camiseta1.jpg'
import ShirtImage2 from './Imagens/camiseta2.jpg'
import ShirtImage3 from './Imagens/camiseta3.jpg'
import ShirtImage4 from './Imagens/camiseta4.jpg'
import ShirtImage5 from './Imagens/camiseta5.png'

const DivApp = styled.div `
  background-color: #ebeff3;
  color: black;
  display: flex;
  padding: 10px;
  height: 100vh;
`

//Retirado o produto dos states e feito somente um array com objetos;
//State só serve para setar valores iniciais que podem ser mudados ou que vão continuar a mesma coisa

const produtos = [
  {
    id: 1,
    nome: "Camiseta I",
    preco: 10,
    imagem: ShirtImage1
  },
  {
    id: 2,
    nome: "Camiseta II",
    preco: 20,
    imagem: ShirtImage2
  },
  {
    id: 3,
    nome: "Camiseta III",
    preco: 30,
    imagem: ShirtImage3
  },
  {
    id: 4,
    nome: "Camiseta IV",
    preco: 40,
    imagem: ShirtImage4
  },
  {
    id: 5,
    nome: "Camiseta V",
    preco: 50,
    imagem: ShirtImage5
  }
]

class App extends React.Component {
  render() {
    return (
      <DivApp>
        <Filtro />
        <Produtos produtos={produtos} /> 
        <Carrinho />
      </DivApp>
    );
  }
}

export default App;
