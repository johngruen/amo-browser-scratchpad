import React from 'react';
import SearchResult from './search-result';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div id="search-results">
        <h3>Top Add-ons:</h3>
        <ul>
          <SearchResult />
          <SearchResult />
          <SearchResult />
          <SearchResult />
         </ul>
      </div>
    );
  }
}

export default SearchResults;
