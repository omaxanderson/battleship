import React from 'react';

class Ships extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ship5: this.props.shipNums.ship5,
      ship4: this.props.shipNums.ship4,
      ship3: this.props.shipNums.ship3,
      ship2: this.props.shipNums.ship2,
      ships: [1, 2, 7, 5],
    }
  }

  render() {
    return(
      <div className='shipSetup'>
        <ul>
          <li id="ship5" className={this.state.ship5 ? "text-red" : "text-green"}>
            Aircraft Carrier ({this.state.ship5} left)
          </li>

          <li id="ship4" className={this.state.ship4 ? "text-red" : "text-green"}>
            Battleship ({this.state.ship4} left)
          </li>

          <li id="ship3" className={this.state.ship3 ? "text-red" : "text-green"}>
            Cruiser ({this.state.ship3} left)
          </li>

          <li id="ship2" className={this.state.ship2 ? "text-red" : "text-green"}>
            Destroyer ({this.state.ship2} left)
          </li>
        </ul>
        <button onClick={() => this.handleClick(2)}>Click Me</button>
      </div>
    )
  }

  handleClick(ship) {
    var ships = [this.state.ship5, this.state.ship4, this.state.ship3, this.state.ship2];
    //var ships = this.state.ships;
    switch (ship) {
      case 2:
        if (this.state.ship2 > 0) {
          this.setState({ship2: this.state.ship2 - 1})
        }
        break;
      case 3:
        if (this.state.ship2 > 0) {
          this.setState({ship3: this.state.ship3 - 1})
        }
        break;
      case 4:
        if (this.state.ship2 > 0) {
          this.setState({ship4: this.state.ship4 - 1})
        }
        break;
      case 5:
        if (this.state.ship2 > 0) {
          this.setState({ship5: this.state.ship5 - 1})
        }
        break;
      default:
    }
    this.setState({ships: ships});
  }

}

export default Ships;
