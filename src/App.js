import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
//Styles
import { GlobalStyle } from './helpers';
//Components
import { SearchField } from './components/input';

const AppWrapperStyled = styled.div`
  display: flex;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <AppWrapperStyled>
          <SearchField />
        </AppWrapperStyled>    
      </Fragment>
    );
  }
}

export default App;
