import React from 'react';
import PrincipalText from './PrincipalText';
import ContentMain from './ContentMain';

class Main extends React.Component {
  render() {
    return (
      <main className='main'>
      <div className='principalText'>
        <PrincipalText />
      </div>
      <div className='secondText'>
        <ContentMain idClass="About" title="About"/>
        <ContentMain idClass="Contact" title="Contact"/>
      </div>
    </main>
    );
  }
}

export default Main;