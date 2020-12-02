// import React, { Component } from 'react';

// export default class Carousel extends Component {
//   state = {
//     counter: 0,
//     picture: this.props.imgs[0],
//   };
//   nextPicture = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     });
//   };
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <button>left</button>
//         <img alt="" src={this.state.picture} />
//         <button onClick={this.nextPicture}>right</button>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';

export default class Carousel extends Component {
  state = {
    counter: 0,
    picture: this.props.imgs[0],
  };
  nextPicture = () => {
    if (this.state.counter > 3) {
      this.setState({
        counter: this.state.counter - 4,
      });
    }
    this.setState({
      counter: this.state.counter + 1,
      picture: this.props.imgs[this.state.counter],
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <button>left</button>
        <img alt="" src={this.state.picture} />
        <button onClick={this.nextPicture}>right</button>
      </div>
    );
  }
}

