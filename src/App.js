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
//  change page with state
 
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<Aboutme/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contactme" element={<Contactme/>}/>
        </Routes>
      </>
    );
  }
}

export default App;