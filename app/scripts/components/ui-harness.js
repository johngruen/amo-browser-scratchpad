import React from 'react';
import {IndexRoute, IndexLink, Link } from 'react-router';

import SearchBox from './search-box.js';
import Chrome from './chrome.js';

class Harness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wiggle: true
    };
  }

  componentDidMount() {
    setTimeout(() => {this.setState({'wiggle':false})}, 2000);
  };

  setLayout() {
    if (this.props.layout < 2) {
      return 'row-layout';
    }
    else {
      return 'column-layout';
    }
  }

  disableAnchor(event) {
    event.preventDefault();
  }

  render() {
    return (
        <div id="ui-harness" className={ this.props.fullScreen? "full-screen" : "bounded" }>
          <div id="inner-application" className={this.setLayout()}>
            <nav id="nav-bar">
              <ul>
                <li><a href="" onClick={this.disableAnchor}>Preferences</a></li>
                <span className="pipe"></span>
                <li><Link to="/my-add-ons" activeClassName="active" data-wiggle={this.state.wiggle}> Add-ons</Link></li>
                <span className="pipe"></span>
                <li><Link to="/my-themes" activeClassName="active" data-wiggle={this.state.wiggle}>Themes</Link></li>
                <span className="pipe"></span>
                <li><a href="" onClick={this.disableAnchor}>Help</a></li>
              </ul>
            </nav>
            <div id="main-stage">
              {this.props.routes.children}
            </div>
          </div>
        </div>
      );
  }
}

export default Harness;
