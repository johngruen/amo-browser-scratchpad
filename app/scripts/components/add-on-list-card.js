import React from 'react';
import Color from '../utilities/Color.js';

class AddOnListCard extends React.Component {
  constructor() {
    super();

    this.state = {
      wiggle: true,
      style: {
        background: Color.generate(),
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {this.setState({'wiggle':false})}, 2000);
  };

  render() {
    return (
        <div className="card" data-wiggle={this.state.wiggle} >
          <div className="add-on-logo" style={this.state.style}></div>
          <div className="add-on-copy">
            <h2>{this.props.title}</h2>
            <p>{this.props.shortDesc}</p>
          </div>
          <div className="controls">
            <button title="remove" className="button icon delete"></button>
            <button title="pause" className="button icon pause"></button>
            <button title="preferences" className="button icon prefs"></button>
          </div>
        </div>
      );
  }
}

export default AddOnListCard;
