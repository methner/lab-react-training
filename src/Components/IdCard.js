import React, { Component, Fragment } from 'react';

export default class IdCard extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <img src={this.props.picture} />
        </div>
        <h5>First Name: {this.props.firstName}</h5>
        <h5>Last Name: {this.props.lastName}</h5>
        <h5>Gender: {this.props.gender}</h5>
        <h5>Height: {this.props.height}</h5>
        <h5>Birth: {this.props.birth.toString().slice(0, 15)}</h5>
      </Fragment>
    );
  }
}
