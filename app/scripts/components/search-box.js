import React from 'react';
import SearchResults from './search-results';

class SearchBox extends React.Component {

  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  setFocusState(event) {
    if (event.type === "focus") {
      sessionStorage.setItem('showSearch', true);
      this.setState({isActive: true});
    } else if (event.type === "blur") {
      sessionStorage.setItem('showSearch', false);
      this.setState({isActive: false});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form id="search-box" className={this.state.isActive ? "active": ""} onSubmit={this.handleSubmit.bind(this)} >
        <input type="text" placeholder="Search Add-ons" onFocus={this.setFocusState.bind(this)} onBlur={this.setFocusState.bind(this)}/>
        <input type="submit" className={this.state.isActive ? "input-active": ""} value="" />
      </form>
    );
  }
}

export default SearchBox;
