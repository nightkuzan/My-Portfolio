import './App.css';
import React,{useRef,useEffect} from 'react';
import { gsap } from "gsap";
// components
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Skills from './components/Skills';
function App() {
  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let cursor = useRef(null);
  let h1 = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;
  useEffect(() => {
    tl.to({},0.016,{
      repeat: -1,
      onRepeat: function(){
        posX += (mouseX-posX) / 50;
        posY += (mouseY-posY) / 50;
        tl.set(cursor,{
          css: {
            left: posX - 50,
            top: posY - 50,
          }
        })
      }
    })
    document.addEventListener("mousemove", function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;

    })
    tl2.from(h1.children,{
      skewY: 8,
      y: 100,
      duration: 2,
      delay: .3,
      opacity: 0,
      stagger: {
        each: .4,
        from: "end"
      }
    })
    // tl2.from(cursor,{
    //   duration: 1.5,
    //   delay: 1,
    //   opacity: 0
    // },"-=1")
  })
  
    return (
      <>
      <div className="cursor" ref={el => cursor = el}></div>

      <Navbar/>
      <Home/>
      <Aboutme/>
      <Skills/> 
      <Resume/>
      <Contactme/>
      </>
    );
  
}

export default App;