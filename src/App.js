import React from 'react';
import './App.css';
// components
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Skills from './components/Skills';

class App extends React.Component {
 
  render() {
    return (
      <>
      <Navbar/>
      <Home/>
      <Aboutme/>
      <Skills/> 
      <Resume/>
      <Contactme/>
      </>
    );
  }
}

export default App;