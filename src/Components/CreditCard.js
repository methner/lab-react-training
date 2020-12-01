import React, { Component } from 'react';

export default class CreditCard extends Component {
  render() {
    const cardStyle = {
      color: this.props.color,
      backgroundColor: this.props.bgColor,
    };
    return (
      <div className="cards" style={cardStyle}>
        <h4>type: {this.props.type}</h4>
        <h4>number: {this.props.number}</h4>
        <h4>
          Expires {this.props.expirationMonth} / {this.props.expirationYear}{' '}
          {this.props.bank}
        </h4>
        <h4>owner:{this.props.owner}</h4>
      </div>
    );
  }
}
