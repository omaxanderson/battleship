import React from 'react';
import Board from './Board';
import Ships from './Ships';

class Game extends React.Component {

  constructor(props) {
    super(props);

    /* player squares: {
      key: string - unique key for each square
      firedOn: bool - determines whether or not the square has been fired on
      shipId: int [2,3,4,5, 0] - associates a square with a ship
    }
    */
    var playerSquares = Array(10);
    var opponentSquares = Array(10);
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const letters = ['a','b','c','d','e','f','g','h','i','j'];
    for (let i = 0; i < playerSquares.length; i++) {
      playerSquares[i] = Array(10);
      opponentSquares[i] = Array(10);
      for (let j = 0; j < playerSquares[0].length; j++) {
        playerSquares[i][j] = {id: nums[i] + letters[j], shipId: 0};
        opponentSquares[i][j] = {id: nums[i] + letters[j], shipId: 0};
      }
    }

    this.state = {
      playerSquares: playerSquares,
      opponentSquares: opponentSquares,
      isSetupPhase: false,
      shipNums: {
        ship2: 5,
        ship3: 7,
        ship4: 2,
        ship5: 1,
      },
    }
    this.setupOpponentShips();
  }

  // 0 north 1 east 2 south 3 west
  setShip(row, col, shipId) {
    let direction = Math.floor(Math.random() * 4);
    let dist = direction < 1 ? 1 : -1;   // dist from original square
    let hasChangedDirection = false;
    let idx;
    let shipLocations = [];

    if (this.state.opponentSquares[row][col]['shipId']) {
      return false;
    } else {
      shipLocations.push([row, col]);
    }

    while (shipLocations.length < shipId) {
      // if square open in direction, set it
      if (direction % 2 === 0) {
        idx = row + dist;
      } else {
        idx = col + dist;
      }

      if (idx < 10 && idx >= 0 && !(direction % 2 === 0 ?
              this.state.opponentSquares[idx][col]['shipId'] :
              this.state.opponentSquares[row][idx]['shipId'])) {
        // this square is empty and should be set to the ship
        //this.state.opponentSquares[idx][col]['shipId'] = shipId;
        shipLocations.push([direction % 2 === 0 ? idx : row,
                            direction % 2 === 0 ? col : idx]);
        dist += dist > 0 ? 1 : -1;    // move the square one further away
      } else {
        // this square is either occupied or the edge of the map
        if (!hasChangedDirection) {
          // change directions
          hasChangedDirection = true;
          dist = dist > 0 ? -1 : 1;
        } else {
          // ran into problems on both sides
          return false;
        }
      }
    }
    for (let loc of shipLocations) {
      this.state.opponentSquares[loc[0]][loc[1]]['shipId'] = shipId;
    }
    return true;
  }

  // 0 north, 1 east, 2 south, 3 west
  setupOpponentShips() {
    for (let i = 0; i < this.state.shipNums.ship5; i++) {
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      while (!this.setShip(row, col, 5)) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        console.log("recheck 5");
      }
    }
    for (let i = 0; i < this.state.shipNums.ship4; i++) {
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      while (!this.setShip(row, col, 4)) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        console.log("recheck 4");
      }
    }
    for (let i = 0; i < this.state.shipNums.ship3; i++) {
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      while (!this.setShip(row, col, 3)) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        console.log("recheck 3");
      }
    }
    for (let i = 0; i < this.state.shipNums.ship2; i++) {
      let row = Math.floor(Math.random() * 10);
      let col = Math.floor(Math.random() * 10);
      while (!this.setShip(row, col, 2)) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * 10);
        console.log("recheck 2");
      }
    }
  }

  setupShipMouseDown() {
    console.log("ship setup down");
  }

  setupShipMouseUp() {
    console.log("ship setup up");
  }

  fire(squareId) {
    console.log(squareId);
    console.log("FIRE on " + squareId + "!!!");
  }

  handleMouseEnter() {
    console.log("mouse enter");
  }

  render() {
    return(
      <div>
        <Board
          onMouseDown={() => {this.setupShipMouseDown()}}
          onMouseUp={() => {this.setupShipMouseUp()}}
          onMouseEnter={() => {this.handleMouseEnter()}}
          onClick={this.fire}
          opponentSquares={this.state.opponentSquares}
          playerSquares={this.state.playerSquares}

        />
        <Ships
          className="shipSetup"
          shipNums={this.state.shipNums}

        />
      </div>
    )
  }

}

export default Game;
