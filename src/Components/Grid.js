import React from 'react';
import Square from './Square';

class Grid extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      squares: Array(10).fill(Array(10).fill(null)),
    }
  }

  render() {
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const letters = ['a','b','c','d','e','f','g','h','i','j'];
    const squares = nums.map((num) => {
      return (
        <div className='row' key={num}>
          {letters.map((letter) => {
            let classNames = [];
            for (let row of this.props.squares) {
              for (let obj of row) {
                if (obj['id'] === (num + letter) && obj['shipId'] !== 0) {
                  console.log("YEP");
                  classNames.push("ship col-" + obj['shipId']);
                }
              }
            }
            return(
              <Square
                id={num + letter}
                key={num + letter}
                onClick={this.props.onClick}
                onMouseDown={this.props.onMouseDown}
                onMouseUp={this.props.onMouseUp}
                onMouseEnter={this.props.onMouseEnter}
                isPlayerSquare={this.props.owner === "player"}
                classes={classNames}
              />
            )
          })}
        </div>
      )
    });
    return(
      <div className={this.props.owner + " grid"}>
        <h3>{this.props.owner === 'player' ? "Player" : "Opponent"}</h3>
        {squares}
      </div>
    )
  }

}

export default Grid;
