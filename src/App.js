import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Styles
import { GlobalStyle } from './helpers';
//Components
import { SearchField } from './components/input';
import { MoviePage } from './components/moviepage';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Router>
          <Fragment>
            <Route exact path="/" component={SearchField} />
            <Route path="/movie/:id" component={MoviePage} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
