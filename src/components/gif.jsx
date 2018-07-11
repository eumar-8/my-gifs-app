import React, { Component } from 'react';

class Gif extends Component {
  
  handleClick = () => {
    const { id } = this.props;
    this.props.newGif(id)
  }

  render() {
    const { id } = this.props;
    const src = `https://i.giphy.com/media/${id}/giphy.gif`;
    return (
        <img className="gif" src={src} alt="gif" onClick = {this.handleClick} />
    );
  }
}


export default Gif;
