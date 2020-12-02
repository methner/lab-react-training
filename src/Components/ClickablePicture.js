import React, { Component } from 'react';

export default class ClickablePicture extends Component {
  state = {
    isClicked: false,
    image: this.props.img,
  };
  toggleClickStatus = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };
  render() {
    console.log(this.state.isClicked);
    return (
      <div>
        <img
          style={{ width: '200px' }}
          src={!this.state.isClicked ? this.props.img : this.props.imgClicked}
          alt=""
          onClick={this.toggleClickStatus}
        />
      </div>
    );
  }
}
