import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import ProjectPage from './ProjectPage/ProjectPage';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <div className="mt-5">
            <Header />
          </div>
          <div className="my-5">
            <Route exact path="/portfolio" component={ProjectPage} />
          </div>
          <div className="mb-5">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
