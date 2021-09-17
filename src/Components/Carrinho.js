import React from 'react';
import styled from 'styled-components';

const borda = styled.div `
border: solid 3px;
`

class Carrinho extends React.Component {
    render() {
        return (
            <borda>
                <h3>Carrinho</h3>
          
            </borda>
        );
    }
}

export default Carrinho;