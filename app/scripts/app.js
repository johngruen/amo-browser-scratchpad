import React from 'react';
import Loader from './components/loader';
import UIHarness from './components/ui-harness';
import Chrome from './components/chrome';

const LATENCY = 0;

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      fullScreen: false,
      layout: 0,
      loading: true
    };
  }

  handleOptionSelect(event) {
    event.preventDefault();
    let id = event.target.dataset.reactid.slice(-1);
    this.setState({loading:true});
    this.setState({layout:id});
  }

  toggleFullScreen(event) {
    event.preventDefault();
    this.setState({loading:true});
    this.setState({fullScreen: !this.state.fullScreen});
  }

  toggleLoader() {
    if(this.state.loading) {
      setTimeout(
        () => {
          this.setState({loading: false});
        }, LATENCY);
    }
  }

  render() {
    this.toggleLoader();
    if (this.state.loading) {
      return (<Loader />);
    } else {
      return (
        <div id>
          <div id="inner">
            <Chrome />
            <UIHarness routes={this.props} fullScreen={this.state.fullScreen} layout={this.state.layout} />
          </div>
          <div id="app-options">
            <a href="" onClick={this.handleOptionSelect.bind(this)}>Row Layout One</a>
            <a href="" onClick={this.handleOptionSelect.bind(this)}>Row Layout Two</a>
            <a href="" onClick={this.handleOptionSelect.bind(this)}>Column Layout</a>
            <a className="toggle-full" href="" onClick={this.toggleFullScreen.bind(this)}>Toggle Full Screen</a>
          </div>
        </div>
      );
    }
  }
};

export default App;
