import React from 'react';
import AddOnStoreHeader from './add-on-store-header';
import AddOnStoreItem from './add-on-store-item';
import Search from './search.js';
import data from '../data/add-on-list.js';

class AddOnStore extends React.Component {
  
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
      <div className="content">
        <Search />
        <div className="grid">
          {storeItems}
        </div>
      </div>
    );
  }

}

export default AddOnStore;
