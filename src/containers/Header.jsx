import React from 'react';

import EnableDarkMode from '../components/EnableDarkMode';
import SuscriberCount from '../components/SubscriberCount';

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <EnableDarkMode />
        <SuscriberCount />
      </>
    );
  }
}
export default Header;
