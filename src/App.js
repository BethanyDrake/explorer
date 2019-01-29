import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-size: 3em;
`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          Hello! This is an exploration game!
        </Header>
        {/* <img src ={ require('./logo.svg') } /> */}
        <p>(There's not much to explore).</p>
      </div>
    );
  }
}

export default App;
