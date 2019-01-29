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

const WallSquare = styled.div`
  width: 12em;
  height: 12em;
  background: grey;
`;

const PathSquare = styled.div`
  width: 12em;
  height: 12em;
  background: #604700;
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


const map1 = [["W", "W","W"], ["P","P","P"] , ["P","W","P"]]
const map2 = [["W", "W","P"], ["P","P","P"] , ["P","W","W"]]
class App extends Component {
  render() {
    let map = (Math.random() < 0.5) ? map1 : map2
    return (
      <div className="App">
        <link rel="icon" type="image/svg" href="./logo.svg" sizes="16x16" />
        <Header className="App-header">
          Hello! This is an exploration game!
        </Header>
        {/* <img src ={ require('./logo.svg') } /> */}
        <p>(There's not much to explore).</p>
        <MapBox>
          {map.flat().map((letter, index) => letter === "W" ? <WallSquare key = {index}/> : <PathSquare key = {index}/>)}
        </MapBox>
      </div>
    );
  }
}

export default App;
