import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';

// components
import Aboutme from './components/Aboutme';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Contactme from './components/Contactme';

class App extends React.Component {
//  change page with state
  constructor(props){
    super(props);
    this.state = {
      page: 'home'
    }
  }
  render() {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<Aboutme/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contactme" element={<Contactme/>}/>
        </Routes>
      </BrowserRouter>

    );
  }
}

export default App;