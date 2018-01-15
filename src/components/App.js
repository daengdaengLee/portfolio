import React, { Component } from 'react';
import './App.css';

import Avatar from './Avatar/Avatar';
import PageTitle from './PageTitle/PageTitle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avatar />
        <PageTitle />
      </div>
    );
  }
}

export default App;
