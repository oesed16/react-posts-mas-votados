import React, { Component } from 'react';
import ListPosts from './components/ListPosts';
import './App.css';
import Sort from './components/Sort';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortType: 0
    }
  }

  sortChanged = (sortType) => {
    this.refs.listPostChild.reorderPosts(sortType)
  }

  render() {
    return (
      <div>
        <h1>Blog Posts Populares</h1>
        <hr />
        <h4>Orden:&nbsp;<Sort sortCallback={this.sortChanged} /></h4>
        &nbsp;
        <ListPosts ref='listPostChild' sortType={this.state.sortType} />
      </div>
    );
  }
}

export default App;
