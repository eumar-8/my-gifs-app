
import React, { Component } from 'react';

class SearchBar extends Component {
  handleOnChange = (event) => {
    if(event.target.value === '') return;
    this.props.search(event.target.value, 'g', 10);
  }


  

  render() {
    return (
     
        <input  className="form-search form-control" onChange={this.handleOnChange}/>
  
      
    );
  }
}

export default SearchBar;
