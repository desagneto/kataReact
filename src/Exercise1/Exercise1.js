import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ['a', 'b', 'c', 'd']
    };
  }
  
  render() {

    const { board } = this.state;

    return (
      <div>
        {board.map((row, i) => (
          <div key={i}>

            <span >{row}</span>

          </div>
        ))}
      </div>

    );
  }
}

export default Exercise1;
