import React, { Component } from 'react';

export default class BoxColor extends Component {
  render() {
    console.log(this.props);
    const style = {
      backgroundColor: `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`,
      color: this.props.fontColor,
    };
    return <div style={style}>hello</div>;
  }
}
