import React from 'react';
import AddOnListCard from './add-on-list-card';
import Search from './search.js';
import data from '../data/add-on-list.js';

class AddOnList extends React.Component {
  
  constructor() {
    super();
    this.state = {
      data:data
    };
  }

  render() {
    let addOnCards = this.state.data.map(function(data) {
      return (
        <AddOnListCard key={data.key} title={data.title} shortDesc={data.shortDesc}/>
      );
    });
    return (
      <div className="content" id="my-add-ons">
        <Search />
        <div className="list">
          {addOnCards}
        </div>
        <button class="button large default">Get More Add-ons</button>
      </div>
    );
  }
}

export default AddOnList;
