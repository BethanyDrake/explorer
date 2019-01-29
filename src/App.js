import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  font-size: 3em;
`;

const Square = styled.div`
  width: 12em;
  height: 12em;
  background: grey;
`;

const MapBox = styled.div`
  width: 38em;
  height: 38em;
  background: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;


class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="icon" type="image/svg" href="./logo.svg" sizes="16x16" />
        <Header className="App-header">
          Hello! This is an exploration game!
        </Header>
        {/* <img src ={ require('./logo.svg') } /> */}
        <p>(There's not much to explore).</p>
        <MapBox>
        <Square/><Square/><Square/>
        <Square/><Square/><Square/>
        <Square/><Square/><Square/>
        </MapBox>
      </div>
    );
  }
}

export default App;
