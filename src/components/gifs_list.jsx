import React, { Component } from 'react';
import Gif from './gif';

class GifsList extends Component {
  render() {
    const { gifs, handleGifClick } = this.props;

    return (
      <div className="gif-list">
        {gifs.map(x => (

          <Gif
            id={x.id}
            key={x.id}
            newGif={handleGifClick}
          />

        ))}

      </div>
    );
  }
}


export default GifsList;
