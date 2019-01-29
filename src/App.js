import React, { Component } from 'react';
import styled from 'styled-components';
import chickenFlying from './img/chicken-pngs/flying/frame-1.png';

const Header = styled.header`
  font-size: 3em;
`;



const MapAndArrowsContainerCenterPeice = styled.div`
  width: 38em
  height: 50em;
  background: pink;
`;


const MapAndArrowsContainer = styled.div`
  height: 50em;
  width: 50em;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Square = styled.div`
  width: 12em;
  height: 12em;
`;

const WallSquare = styled(Square)`
  width: 12em;
  height: 12em;
  background: grey;
`;

const PathSquare =styled(Square)`
  background: #604700;
`

const Image = styled.img`
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
  margin: auto;
`;





const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 4em solid transparent;
  border-right: 4em solid transparent;
  border-bottom: 4em solid black;

`;

const DownArrow = styled(Arrow)`
  transform: rotate(180deg);
  float: below;
  margin: 1em auto 1em auto;
`

const LeftArrow = styled(Arrow)`
  transform: rotate(-90deg);
  right: 0em;

`
const RightArrow = styled(Arrow)`
  transform: rotate(90deg);
`

const UpArrow = styled(Arrow)`
  float: above;
  margin: 1em auto 1em auto;
`;


const map1 = [["W", "W","W"], ["P","P","P"] , ["P","W","P"]]
const map2 = [["W", "W","P"], ["P","P","P"] , ["P","W","W"]]
class App extends Component {

  render() {
    let map = (Math.random() < 0.5) ? map1 : map2
    let squares = map.flat().map((letter, index) => letter === "W" ? <WallSquare key = {index}/> : <PathSquare key = {index}/>)
    squares[4] = <PathSquare key = "center" > <Image alt="character" src={chickenFlying}/></PathSquare>
    return (
      <div className="App">
      <Header className="App-header">
          Hello! This is an exploration game!
        </Header>
        {/* <img src ={ require('./logo.svg') } /> */}
        <p>(There's not much to explore).</p>
        <MapAndArrowsContainer>
          <LeftArrow/>
       <MapAndArrowsContainerCenterPeice>
          <UpArrow/>
          <MapBox>
          {squares}
          </MapBox>
          <DownArrow/>
        </MapAndArrowsContainerCenterPeice>
        <RightArrow/>
        </MapAndArrowsContainer>
      </div>

    );
  }
}

export default App;
