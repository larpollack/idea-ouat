import React, {Component} from 'react';
import Navbar from "./Components/Navbar";

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
      <Navbar />
      {/* <Carousel />
      <Main />
      <Footer /> */}
      </div>
    );
  }
}

export default App;
