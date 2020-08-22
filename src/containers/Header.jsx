import React from 'react';

import EnableDarkMode from '../components/EnableDarkMode';
import SuscriberCount from '../components/SubscriberCount';

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <section>
          <EnableDarkMode />
          <SuscriberCount />
        </section>
      </>
    );
  }
}
export default Header;
