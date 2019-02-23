import React, { Component } from 'react';
import styled from 'styled-components';

const AppWrapperStyled = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <AppWrapperStyled>
        <h1>Hello!</h1>
      </AppWrapperStyled>    
    );
  }
}

export default App;
