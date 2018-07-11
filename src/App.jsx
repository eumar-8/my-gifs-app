import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import Gif from './components/gif';
import GifsList from './components/gifs_list';
import { searchGif } from './api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif:"FBgN017wtq1YQ",
      gifs: [{id: 'cituf0Vb5FYSk'},{id: "sD4ki8FbWxRfi"},{id:"1X7W6wtkT7Xtm"},{id:"xNGLFwbHLSBjO"},{id:"FBgN017wtq1YQ"},{id:"2TagIIQXaVddK"},{id:"qSWTvcncLoptC"},{id:"14cCD0cXj1sg0M"},{id:"10J9qwM8ebGPPW"}],
    };
  }

  search = (q, rating, limit) => {
    searchGif(q, rating, limit, (err, res) => {
      this.setState({
        gifs: res.data,
      });
    });
  }

  handleGif = (id) => {
    this.setState ({
      selectedGif: id,
    })

  }


  render() {
    const { gifs } = this.state;
    return (
      <div className="App">
        <div className="left-scene">
        
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif}  />
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={gifs} handleGifClick={this.handleGif} />
        </div>
      </div>
    );
  }
}

export default App;
