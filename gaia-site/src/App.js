import React from 'react';
import SocialIcons from './Components/SocialIcons';
import TextInfo from './Components/TextInfo';
import Image from './Components/Image';
import TextComing from './Components/TextComing';
import TextComing2 from './Components/TextComing2';
import About from './Components/About';
import Contact from './Components/Contact';
import Countdown from './Components/Countdown/CountdownTimer';
// import Countdown from './Components/Countdown';
import './Components/App.css'
function App() {
  return (
    <div>
      <header className='header'>
        <div className='LinksHeader'>
          <TextInfo title='About' link='#LinkAbout' />
          <TextInfo title='Contact' link='#LinkContact' />
        </div>
        <div className='imgLogo'>
          <Image />
        </div>
        
        <div className='timer'> 
          <Countdown countdownTimestampMs={1666290000000} /> 
        </div>                  
      </header>
      <main className='main'>
        <div className='principalText'>
          <TextComing />
          <TextComing2 />
        </div>
        <div className='secondText'>
          <About />
          <Contact />
        </div>
      </main>
      <footer className='footer'>
        <SocialIcons />
      </footer>
    </div>
  );
}

export default App;
