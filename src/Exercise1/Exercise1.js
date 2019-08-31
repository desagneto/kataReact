import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: ['a', 'b', 'c', 'd']
    };
  }

  render() {
    const elements = ['a', 'b', 'c'];

    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(<spam key={index}>{value}</spam>);
    }

    return (
      <div>
        {items}
      </div>
    );
  }
}

export default Exercise1;
