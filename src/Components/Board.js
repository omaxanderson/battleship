import React from 'react';
import Grid from './Grid';

class Board extends React.Component {

  constructor(props) {
    super(props);
    var squares = Array(10);
    for (var i = 0; i < 10; i++) {
      squares[i] = Array(10);
      for (var j = 0; j < 10; j++) {
        squares[i][j] = j + 1;
      }
    }

    this.state = {
      squares: squares,
      isSetup: true,
    }
  }


  render() {
    return(
      <div>
        <Grid
          owner="player"
          onMouseDown={this.props.onMouseDown}
          onMouseUp={this.props.onMouseUp}
          onMouseEnter={this.props.onMouseEnter}
          squares={this.props.playerSquares}
        />
        <Grid
          owner="opponent"
          onClick={this.props.onClick}
          squares={this.props.opponentSquares}
        />
      </div>
    )
  }

}

export default Board;
