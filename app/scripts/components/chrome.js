import React from 'react';

class Chrome extends React.Component {
  constructor() {
    super();
    this.state = {
      doubleFocus: false,
      awesomeBarHasFocus: false,
      searchBarHasFocus: false
    }
  }

  setAwesomeBarFocus(event) {
    this.setState({awesomeBarHasFocus:!this.state.awesomeBarHasFocus});
  }

  setSearchBarFocus(event) {
    this.setState({searchBarHasFocus:!this.state.searchBarHasFocus});
  }

  render() {
    return (
      <div>
      <div id="chrome">
        <div id="chrome-tabbar">
          <div className="os-controls">
            <div className="close"></div>
            <div className="minimize"></div>
            <div className="maximize"></div>
          </div>
          <div className="tab active">
            <div className="tab-name">Tab Name</div>
          </div>
        </div>
        <div id="chrome-toolbar">
          <div className="back-arrow"></div>
          <div className="awesome-bar" data-state={this.state.awesomeBarHasFocus}>
            <button className="inner-bar-button globe" tabIndex='-1'></button>
            <input tabIndex='1' type="text" defaultValue="addons.mozilla.com" onFocus={this.setAwesomeBarFocus.bind(this)} onBlur={this.setAwesomeBarFocus.bind(this)}/>
            <button className="inner-bar-button caret" tabIndex='-1'></button>
            <div className="pipe"></div>
            <button className="inner-bar-button reload" tabIndex='-1'></button>
          </div>
          <div className="search-bar" data-state={this.state.searchBarHasFocus}>
            <button className="inner-bar-button search" tabIndex='-1'></button>
            <input type="text" placeholder="Search"onFocus={this.setSearchBarFocus.bind(this)} onBlur={this.setSearchBarFocus.bind(this)}/>
          </div>
          <div className="toolbar-double-button">
            <button className="toolbar-double-button-left bookmark"></button>
            <button className="toolbar-double-button-right bookmark-list"></button>
          </div>
          <button className="toolbar-button pocket" tabIndex='-1'></button>
          <button className="toolbar-button download" tabIndex='-1'></button>
          <button className="toolbar-button home" tabIndex='-1'></button>
          <button className="toolbar-button hello" tabIndex='-1'></button>
          <div className="pipe"></div>
          <button className="toolbar-button hamburger" tabIndex='-1'></button>
        </div>
      </div>
      </div>
    );
  }
}

export default Chrome;
