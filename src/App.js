import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';

class App extends React.Component {
 
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
        </Routes>
      </>
    );
  }
}

export default App;