import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';

// components
import Aboutme from './components/Aboutme';
import Home from './components/Home'
import Navbar from './components/Navbar';

class App extends React.Component {


  render() {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<Aboutme/>}/>
        </Routes>
      </BrowserRouter>

    );
  }
}

export default App;