import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: this.props.classes,
      content: "",
      key: props.id,
    }
  }

  handleClick() {
    if (this.props.onClick) {
      let classes = this.state.classes.slice();
      classes.push("square-red");
      this.setState({content: "X", classes: classes });
      this.props.onClick(this.state.key);
    }
  }

  render () {
    let classStr = "";
    for (let className of this.state.classes) {
      classStr += className + " ";
    }
    return(
      <div
        onClick={() => {this.handleClick()}}
        onMouseDown={this.props.onMouseDown}
        onMouseUp={this.props.onMouseUp}
        onMouseEnter={this.props.onMouseEnter}
        className={'square ' + classStr}
      >
          {this.state.content}
      </div>
    )
  }
}

export default Square;
