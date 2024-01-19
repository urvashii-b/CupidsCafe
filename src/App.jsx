import React from 'react';
import bgVideo from "./assets/cafevideo.mp4";
import bgVideo2 from "./assets/cafevideocut.mp4";
import Navbar from './components/NavBar/Navbar';
const App = () => {
  return (
    <div>
      <div className='h-[700px] relative'>
        <video
        autoPlay
        loop
        muted
        className='fixed right-0 top-0 h-[700[px] w-half object-cover z[-1]'>
          <source src={bgVideo2} type='video/mp4' />
        </video>
        <Navbar></Navbar>
      </div>
    </div>
  )
}

export default App;
