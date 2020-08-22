import React from 'react';

import SubscribersBySocialNetwork from '../components/SubscribersBySocialNetwork';

class Subs extends React.PureComponent {
  render() {
    return (
      <>
        <section className='Subs'>
          <SubscribersBySocialNetwork />
          <SubscribersBySocialNetwork />
          <SubscribersBySocialNetwork />
          <SubscribersBySocialNetwork />
        </section>
      </>
    );
  }
}

export default Subs;
