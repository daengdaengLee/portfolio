import React, { Component } from 'react';
import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
