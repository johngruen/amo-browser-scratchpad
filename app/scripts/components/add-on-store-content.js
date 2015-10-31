import React from 'react';
import AddOnStoreItem from './add-on-store-item';
import data from '../data/add-on-list.js';


class AddOnStoreContent extends React.Component {

  constructor() {
    super();

    this.state = {
      data: data
    };
  }

  render() {
    let storeItems = this.state.data.map(function(data) {
      return (
        <AddOnStoreItem key={data.key} title={data.title} shortDesc={data.shortDesc}/>
        );
    });

    return (
      <div className="grid" id="add-on-store-content">
        {storeItems}
      </div>
    );
  }

}

export default AddOnStoreContent;
