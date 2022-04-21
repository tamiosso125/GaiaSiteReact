import React from 'react';
import LinkHeader from './LinkHeader';
import Image from './Image';
import Countdown from './Countdown/CountdownTimer'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='linksHeader'>
          <LinkHeader title='About' link='#About' />
          <LinkHeader title='Contact' link='#Contact' />
        </div>
        <div className='imgLogo'>
          <Image />
        </div>
        
        <div className='timer'> 
          <Countdown countdownTimestampMs={1666290000000} /> 
        </div>
      </header>                
    );
  }
}

export default Header;