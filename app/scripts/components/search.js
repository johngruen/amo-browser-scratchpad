import React from 'react';
import SearchResults from './search-results.js';
import SearchBox from './search-box.js';


class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      isSearchDisplayed: this.getWindowState(null)
    };
  }

  componentWillMount() {
    console.log("!");
  }

  getWindowState(event) {
    console.log(sessionStorage.getItem('showSearch'));
    if (sessionStorage.getItem('showSearch') === null) {
      return false;
    } else {
      return sessionStorage.getItem('showSearch');
    }
  }


  render() {
    return (
        <div id="search" onClick={this.getWindowState.bind(this)}>
          <SearchBox />
          <searchResults />
        </div>
      );
  }
}

export default Search;
