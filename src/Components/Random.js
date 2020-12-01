import React, { Component } from 'react';

export default class Random extends Component {
  render() {
    const randomNumber =
      Math.floor(Math.random() * (this.props.max - this.props.min)) +
      this.props.min;
    return (
      <div>
        <h3>
          Random value between {this.props.min} and {this.props.max} =
          {randomNumber}
        </h3>
      </div>
    );
  }
}
