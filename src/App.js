import React from 'react';
import Footer from './components/Footer';
import Home from './screen/Home'
import Nav from './components/Nav';
import Header from './components/Header';
import BounceIntro from './components/BounceIntro';
import ProgresBar from './components/ProgresBar';
import Timer from './components/Timer';
import './App.css';
import FactsList from './components/FactsList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BounceIntro />
          <div className='homePage'>
          <Nav />
          <Header />
          <Home />
          <Timer />
          <ProgresBar />
          <Footer />
         </div>     
        </div>     
    );
  }
}

export default App;
