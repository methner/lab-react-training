import React, { Component } from 'react';

const diceSides = {
  1: '/img/dice1.png',
  2: '/img/dice2.png',
  3: '/img/dice3.png',
  4: '/img/dice4.png',
  5: '/img/dice5.png',
  6: '/img/dice6.png',
};
export default class Dice extends Component {
  state = {
    diceSide: diceSides[Math.floor(Math.random() * 6) + 1],
  };
  changeSide = () => {
    this.setState({
      diceSide: '/img/dice-empty.png',
    });
    setTimeout(() => {
      this.setState({
        diceSide: diceSides[Math.floor(Math.random() * 6) + 1],
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>Dice here:</h1>
        <img
          alt=""
          onClick={this.changeSide}
          src={this.state.diceSide}
          style={{ width: '200px' }}
        />
      </div>
    );
  }
}

