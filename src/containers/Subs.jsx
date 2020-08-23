import React from 'react';

import SubscribersBySocialNetwork from '../components/SubscribersBySocialNetwork';

class Subs extends React.PureComponent {
  render() {
    return (
      <>
        <section className='Subs'>
          <div className='Container'>
            <SubscribersBySocialNetwork />
            <SubscribersBySocialNetwork />
            <SubscribersBySocialNetwork />
            <SubscribersBySocialNetwork />
          </div>
        </section>
      </>
    );
  }
}

export default Subs;
