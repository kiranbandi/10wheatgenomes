/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Root sass file for webpack to compile
import './sass/main.scss';
import Container from './components/Container';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Home />
        </Container>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

