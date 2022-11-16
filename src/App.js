import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import SkillnExp from './components/SkillnExp';

class App extends React.Component {
 
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="My-Portfolio/aboutme" element={<Aboutme />} />
          <Route path="My-Portfolio/resume" element={<Resume />} />
          <Route path="/contactme" element={<Contactme />} />
          <Route path="/myskills" element={<SkillnExp />} />
        </Routes>
      </>
    );
  }
}

export default App;