import React from 'react';
import Color from '../utilities/Color.js';

class AddOnStoreListItem extends React.Component {
  constructor() {
    super();
    
    this.state = {
      style: {
        background: Color.generate()
      }
    };

  }

  render() {
    return (
      <div className="card">
        <div className="add-on-logo" style={this.state.style}></div>
        <div className="add-on-copy">
          <h2>{this.props.title}</h2>
          <p>{this.props.shortDesc} <br/> <a href="">Read more</a></p>
        </div>
        <div className="rating">
          <div className="stars">
            <div className="star-full"></div>
            <div className="star-full"></div>
            <div className="star-full"></div>
            <div className="star-full"></div>
            <div className="star-half"></div>
          
          </div>
          <div className="stats">
          <a href="" className="review-count">4,121 reviews</a>
          <div className="download-count">21,257,742 downloads</div>
          </div>
        </div>
        <div className="controls">
     
          <button className="button primary">Add to Firefox</button>
        </div>
      </div>
    );
  }

}

export default AddOnStoreListItem;
