import React from 'react';

import EnableDarkMode from '../components/EnableDarkMode';
import SuscriberCount from '../components/SubscriberCount';

import '../styles/header.styl';

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <header className='Header'>
          <div className='Container-header'>
            <SuscriberCount />
            <EnableDarkMode />
          </div>
        </header>
      </>
    );
  }
}
export default Header;
